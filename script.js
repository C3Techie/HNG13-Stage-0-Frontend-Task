// Initialize the application when DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  initializeTimeDisplay()
  addInteractionEnhancements()
})

// Initialize and update the time display
function initializeTimeDisplay() {
  const timeElement = document.querySelector('[data-testid="test-user-time"]')

  if (!timeElement) {
    console.error("Time element not found")
    return
  }

  // Function to update time
  const updateTime = () => {
    const currentTime = Date.now()
    timeElement.textContent = currentTime
  }

  // Set initial time immediately
  updateTime()

  // Update time every second (1000ms)
  setInterval(updateTime, 1000)
}

// Add interaction enhancements for better UX
function addInteractionEnhancements() {
  // Add smooth scroll behavior
  document.documentElement.style.scrollBehavior = "smooth"

  // Add keyboard navigation hints for social links
  const socialLinks = document.querySelectorAll(".social-link")
  socialLinks.forEach((link) => {
    link.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        link.click()
      }
    })
  })
}
