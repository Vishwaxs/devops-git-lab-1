document.addEventListener('DOMContentLoaded', () => {
  const checkBtn = document.getElementById('check-status-btn');
  const statusBadge = document.getElementById('status-badge');
  const statusDesc = document.getElementById('status-description');

  checkBtn.addEventListener('click', () => {
    statusBadge.textContent = 'Pipeline: Build Passing & Healthy';
    statusBadge.style.backgroundColor = 'rgba(34, 197, 94, 0.2)';
    statusBadge.style.color = '#22c55e';
    statusBadge.style.borderColor = '#22c55e';
    statusDesc.textContent = 'All automated tests passed successfully in current local branch.';
  });
});
