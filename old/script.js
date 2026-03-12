const messagesContainer = document.getElementById('messagesContainer');
const pinnedContainer = document.getElementById('pinnedContainer');
const messageForm = document.getElementById('messageForm');
const loginSection = document.getElementById('loginSection');
const forumSection = document.getElementById('forumSection');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const logoutBtn = document.getElementById('logoutBtn');
const currentUserSpan = document.getElementById('currentUser');
const userBadgeSpan = document.getElementById('userBadge');
const modNotice = document.getElementById('modNotice');
const modTools = document.getElementById('modTools');
const promoteForm = document.getElementById('promoteForm');
const promoteUsernameInput = document.getElementById('promoteUsername');
const promoteMessage = document.getElementById('promoteMessage');

const messages = [];
const DEFAULT_MODERATORS = ['chersbobers', 'curds'];
const MODERATORS_STORAGE_KEY = 'forumModerators';
const LEGACY_SEEDED_USERS = ['curds', 'chersbobers'];
const MODERATOR_ALIASES = {
  chersboberss: 'chersbobers',
};
let currentUser = null;
let moderators = [];

function normalizeUsername(name) {
  return String(name || '').trim().toLowerCase();
}

function normalizeModeratorName(name) {
  const normalized = normalizeUsername(name);
  return MODERATOR_ALIASES[normalized] || normalized;
}

function loadModerators() {
  const saved = localStorage.getItem(MODERATORS_STORAGE_KEY);
  const parsed = saved ? JSON.parse(saved) : DEFAULT_MODERATORS;
  let cleaned = [...new Set(parsed.map(normalizeModeratorName).filter(Boolean))];

  if (cleaned.length === 0) {
    cleaned = DEFAULT_MODERATORS.map(normalizeModeratorName);
  }

  return cleaned;
}

function saveModerators() {
  localStorage.setItem(MODERATORS_STORAGE_KEY, JSON.stringify(moderators));
}

function isModerator(username) {
  return moderators.includes(normalizeUsername(username));
}

function isLegacySeededAccount(username, account) {
  if (!account || typeof account !== 'object') return false;
  if (!LEGACY_SEEDED_USERS.includes(username)) return false;

  const legacyHashes = new Set([
    hashPassword('password'),
    hashPassword('pass'),
    hashPassword('yaye2012'),
  ]);

  return legacyHashes.has(account.password);
}

function initializeUsers() {
  moderators = loadModerators();
  const saved = localStorage.getItem('users');
  const rawUsers = saved ? JSON.parse(saved) : {};
  const users = {};

  Object.entries(rawUsers).forEach(([name, value]) => {
    const normalized = normalizeUsername(name);
    if (typeof value === 'string') {
      users[normalized] = {
        password: value,
        isMod: isModerator(normalized),
      };
      return;
    }

    users[normalized] = {
      ...value,
      isMod: isModerator(normalized),
    };
  });

  saveModerators();
  localStorage.setItem('users', JSON.stringify(users));
}

function hashPassword(pwd) {
  let hash = 0;
  for (let i = 0; i < pwd.length; i++) {
    const char = pwd.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return hash.toString();
}

function loadCurrentUser() {
  const saved = normalizeUsername(localStorage.getItem('currentUser'));
  if (saved) {
    currentUser = saved;
    showForum();
  } else {
    showLogin();
  }
}

function showLogin() {
  loginSection.style.display = 'block';
  forumSection.style.display = 'none';
}

function showForum() {
  loginSection.style.display = 'none';
  forumSection.style.display = 'block';
  currentUserSpan.textContent = `Logged in as: ${currentUser}`;
  
  if (isModerator(currentUser)) {
    userBadgeSpan.style.display = 'inline-block';
    modNotice.style.display = 'block';
    if (modTools) modTools.style.display = 'block';
    if (promoteForm) promoteForm.style.display = 'block';
  } else {
    userBadgeSpan.style.display = 'none';
    modNotice.style.display = 'none';
    if (modTools) modTools.style.display = 'none';
    if (promoteForm) promoteForm.style.display = 'none';
  }

  if (promoteMessage) {
    promoteMessage.textContent = '';
  }
  
  loadMessages();
  renderMessages();
}

function loadMessages() {
  const saved = localStorage.getItem('forumMessages');
  if (saved) {
    messages.length = 0;
    messages.push(...JSON.parse(saved));
  }
}

function saveMessages() {
  localStorage.setItem('forumMessages', JSON.stringify(messages));
}

function getTimestamp() {
  const now = new Date();
  return now.toLocaleString();
}

function renderMessages() {
  if (!messagesContainer) return;
  
  const pinned = messages.filter(msg => msg.pinned);
  const unpinned = messages.filter(msg => !msg.pinned);
  
  renderPinnedMessages(pinned);
  renderUnpinnedMessages(unpinned);
}

function renderPinnedMessages(pinnedMsgs) {
  if (!pinnedContainer) return;
  
  pinnedContainer.innerHTML = '';
  
  if (pinnedMsgs.length === 0) {
    pinnedContainer.innerHTML = '<div class="empty-state">No pinned messages</div>';
    return;
  }
  
  pinnedMsgs.forEach((msg) => {
    const originalIndex = messages.indexOf(msg);
    pinnedContainer.appendChild(createMessageElement(msg, originalIndex));
  });
}

function renderUnpinnedMessages(unpinnedMsgs) {
  if (!messagesContainer) return;
  
  messagesContainer.innerHTML = '';
  
  unpinnedMsgs.forEach((msg) => {
    const originalIndex = messages.indexOf(msg);
    messagesContainer.appendChild(createMessageElement(msg, originalIndex));
  });
}

function createMessageElement(msg, index) {
  const messageEl = document.createElement('div');
  messageEl.className = 'message';
  if (msg.pinned) messageEl.classList.add('pinned');
  
  const canModerate = isModerator(currentUser);
  const moderatorBadge = isModerator(msg.author) ? '<span class="mod-badge-small">MOD</span>' : '';
  
  const modControls = canModerate ? `
    <div class="mod-controls">
      <button class="mod-btn pin-btn" data-index="${index}">
        ${msg.pinned ? '📍 Unpin' : '📌 Pin'}
      </button>
      <button class="mod-btn delete-btn" data-index="${index}">🗑️ Delete</button>
    </div>
  ` : '';
  
  const commentsHtml = msg.comments && msg.comments.length > 0
    ? msg.comments.map(comment => {
        const commentMod = isModerator(comment.author) ? '<span class="mod-badge-small">MOD</span>' : '';
        return `
          <div class="comment">
            <div class="comment-author">${escapeHtml(comment.author)} ${commentMod}</div>
            <div class="comment-content">${escapeHtml(comment.content)}</div>
            <div class="comment-time">${comment.timestamp}</div>
          </div>
        `;
      }).join('')
    : '<div class="no-comments">No comments yet</div>';
  
  messageEl.innerHTML = `
    <div class="message-header">
      <div class="message-author">${escapeHtml(msg.author)} ${moderatorBadge}</div>
      <div class="message-time">${msg.timestamp}</div>
    </div>
    <div class="message-content">${escapeHtml(msg.content)}</div>
    
    ${modControls}
    
    <div class="comments-section">
      <div class="comments-list">
        ${commentsHtml}
      </div>
      
      <form class="comment-form" data-message-index="${index}">
        <div class="form-group">
          <input type="text" class="comment-author-input" placeholder="Your name" value="${currentUser}" readonly>
        </div>
        <div class="form-group">
          <textarea class="comment-input" placeholder="Add a comment..." rows="2" required></textarea>
        </div>
        <button type="submit" class="comment-btn">Comment</button>
      </form>
    </div>
  `;
  
  const pinBtn = messageEl.querySelector('.pin-btn');
  const deleteBtn = messageEl.querySelector('.delete-btn');
  
  if (pinBtn) pinBtn.addEventListener('click', () => togglePin(index));
  if (deleteBtn) deleteBtn.addEventListener('click', () => deleteMessage(index));
  
  messageEl.querySelector('.comment-form').addEventListener('submit', (e) => handleCommentSubmit(e, index));
  
  return messageEl;
}

function togglePin(index) {
  if (isModerator(currentUser) && messages[index]) {
    messages[index].pinned = !messages[index].pinned;
    saveMessages();
    renderMessages();
  }
}

function deleteMessage(index) {
  if (isModerator(currentUser) && messages[index]) {
    messages.splice(index, 1);
    saveMessages();
    renderMessages();
  }
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function handleCommentSubmit(e, messageIndex) {
  e.preventDefault();
  
  const contentInput = e.target.querySelector('.comment-input');
  const content = contentInput.value.trim();
  
  if (content && messages[messageIndex]) {
    if (!messages[messageIndex].comments) {
      messages[messageIndex].comments = [];
    }
    
    messages[messageIndex].comments.push({
      author: currentUser,
      content,
      timestamp: getTimestamp(),
    });
    
    saveMessages();
    renderMessages();
  }
}

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const username = normalizeUsername(document.getElementById('loginUsername').value);
  const password = document.getElementById('loginPassword').value;
  const errorDiv = document.getElementById('loginError');
  
  const users = JSON.parse(localStorage.getItem('users') || '{}');

  if (!users[username]) {
    errorDiv.textContent = 'Invalid username or password';
    return;
  }

  if (users[username].password !== hashPassword(password)) {
    errorDiv.textContent = 'Invalid username or password';
    return;
  }

  currentUser = username;
  localStorage.setItem('currentUser', username);
  loginForm.reset();
  errorDiv.textContent = '';
  showForum();
});

registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const username = normalizeUsername(document.getElementById('registerUsername').value);
  const password = document.getElementById('registerPassword').value;
  const confirm = document.getElementById('registerConfirm').value;
  const errorDiv = document.getElementById('registerError');
  
  if (password !== confirm) {
    errorDiv.textContent = 'Passwords do not match';
    return;
  }
  
  if (password.length < 3) {
    errorDiv.textContent = 'Password must be at least 3 characters';
    return;
  }
  
  const users = JSON.parse(localStorage.getItem('users') || '{}');
  
  if (users[username]) {
    if (!isLegacySeededAccount(username, users[username])) {
      errorDiv.textContent = 'Username already exists';
      return;
    }
  }
  
  users[username] = {
    password: hashPassword(password),
    isMod: isModerator(username),
  };
  localStorage.setItem('users', JSON.stringify(users));
  
  currentUser = username;
  localStorage.setItem('currentUser', username);
  registerForm.reset();
  errorDiv.textContent = '';
  showForum();
});

logoutBtn.addEventListener('click', () => {
  currentUser = null;
  localStorage.removeItem('currentUser');
  messages.length = 0;
  showLogin();
});

const tabBtns = document.querySelectorAll('.tab-btn');
tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
    
    btn.classList.add('active');
    const tabId = btn.dataset.tab;
    document.getElementById(tabId).classList.add('active');
  });
});

messageForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const messageInput = document.getElementById('message');
  const content = messageInput.value.trim();
  
  if (content) {
    const newMessage = {
      author: currentUser,
      content,
      timestamp: getTimestamp(),
      comments: [],
      pinned: false,
    };
    
    messages.unshift(newMessage);
    saveMessages();
    renderMessages();
    
    messageForm.reset();
  }
});

if (promoteForm) {
  promoteForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!isModerator(currentUser)) {
      if (promoteMessage) promoteMessage.textContent = 'Only moderators can promote users.';
      return;
    }

    const target = normalizeUsername(promoteUsernameInput.value);
    const users = JSON.parse(localStorage.getItem('users') || '{}');

    if (!target) {
      if (promoteMessage) promoteMessage.textContent = 'Enter a username.';
      return;
    }

    if (!users[target]) {
      if (promoteMessage) promoteMessage.textContent = 'User not found. They need to register first.';
      return;
    }

    if (!isModerator(target)) {
      moderators.push(target);
      moderators = [...new Set(moderators.map(normalizeUsername).filter(Boolean))];
      saveModerators();
    }

    users[target].isMod = true;
    localStorage.setItem('users', JSON.stringify(users));

    if (promoteMessage) promoteMessage.textContent = `${target} is now a moderator.`;
    promoteForm.reset();
    showForum();
  });
}

initializeUsers();
loadCurrentUser();


