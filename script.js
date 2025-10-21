// Initialize the application when DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  initializeTimeDisplay()
  addInteractionEnhancements()
  initializeContactForm()
})

// Function to update the time display
function initializeTimeDisplay() {
  const timeElement = document.querySelector('[data-testid="test-user-time"]')

  if (!timeElement) {
    return
  }

  const updateTime = () => {
    const currentTime = Date.now()
    timeElement.textContent = currentTime
  }

  updateTime()
  setInterval(updateTime, 1000)
}

// Interaction enhancements function
function addInteractionEnhancements() {
  document.documentElement.style.scrollBehavior = "smooth"

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

// Contact form validation function
function initializeContactForm() {
  const form = document.getElementById("contactForm")
  
  if (!form) {
    return
  }

  const fullNameInput = document.getElementById("fullName")
  const emailInput = document.getElementById("email")
  const subjectInput = document.getElementById("subject")
  const messageInput = document.getElementById("message")
  const successMessage = document.getElementById("successMessage")

  const validateFullName = () => {
    const value = fullNameInput.value.trim()
    const errorElement = document.getElementById("nameError")
    
    if (value.length === 0) {
      errorElement.textContent = "Full name is required"
      fullNameInput.classList.add("error")
      return false
    } else if (value.length < 2) {
      errorElement.textContent = "Name must be at least 2 characters"
      fullNameInput.classList.add("error")
      return false
    }
    
    errorElement.textContent = ""
    fullNameInput.classList.remove("error")
    return true
  }

  const validateEmail = () => {
    const value = emailInput.value.trim()
    const errorElement = document.getElementById("emailError")
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    
    if (value.length === 0) {
      errorElement.textContent = "Email is required"
      emailInput.classList.add("error")
      return false
    } else if (!emailRegex.test(value)) {
      errorElement.textContent = "Please enter a valid email address"
      emailInput.classList.add("error")
      return false
    }
    
    errorElement.textContent = ""
    emailInput.classList.remove("error")
    return true
  }

  const validateSubject = () => {
    const value = subjectInput.value.trim()
    const errorElement = document.getElementById("subjectError")
    
    if (value.length === 0) {
      errorElement.textContent = "Subject is required"
      subjectInput.classList.add("error")
      return false
    } else if (value.length < 3) {
      errorElement.textContent = "Subject must be at least 3 characters"
      subjectInput.classList.add("error")
      return false
    }
    
    errorElement.textContent = ""
    subjectInput.classList.remove("error")
    return true
  }

  const validateMessage = () => {
    const value = messageInput.value.trim()
    const errorElement = document.getElementById("messageError")
    
    if (value.length === 0) {
      errorElement.textContent = "Message is required"
      messageInput.classList.add("error")
      return false
    } else if (value.length < 10) {
      errorElement.textContent = "Message must be at least 10 characters"
      messageInput.classList.add("error")
      return false
    }
    
    errorElement.textContent = ""
    messageInput.classList.remove("error")
    return true
  }

  fullNameInput.addEventListener("blur", validateFullName)
  emailInput.addEventListener("blur", validateEmail)
  subjectInput.addEventListener("blur", validateSubject)
  messageInput.addEventListener("blur", validateMessage)

  form.addEventListener("submit", (e) => {
    e.preventDefault()

    const isNameValid = validateFullName()
    const isEmailValid = validateEmail()
    const isSubjectValid = validateSubject()
    const isMessageValid = validateMessage()

    if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
      successMessage.style.display = "flex"
      form.reset()
      
      setTimeout(() => {
        successMessage.style.display = "none"
      }, 5000)

      successMessage.scrollIntoView({ behavior: "smooth", block: "nearest" })
    }
  })
}
