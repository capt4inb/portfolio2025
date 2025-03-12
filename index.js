// Tailwind configuration
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        secondary: "#1e40af",
        dark: "#0f172a",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      keyframes: {
        "bounce-right": {
          "0%, 100%": { transform: "translateX(0) translateY(-50%)" },
          "50%": { transform: "translateX(10px) translateY(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "bounce-right": "bounce-right 1.5s infinite",
        "pulse-slow": "pulse 3s infinite",
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  darkMode: "class",
};

// Dark mode toggle
function toggleDarkMode() {
  document.documentElement.classList.toggle("dark");
  localStorage.theme = document.documentElement.classList.contains("dark")
    ? "dark"
    : "light";
}

// Check for saved theme preference
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

// Mobile menu toggle
document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("mobile-menu").classList.toggle("hidden");
});

// Close mobile menu when clicking on a link
document.querySelectorAll("#mobile-menu a").forEach((link) => {
  link.addEventListener("click", function () {
    document.getElementById("mobile-menu").classList.add("hidden");
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Initialize ScrollReveal
const sr = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: 1000,
  delay: 200,
  reset: true,
});

// Apply reveal effects
sr.reveal("#home .container", {});
sr.reveal("#about .container", {});
sr.reveal("#skills .container", {});
sr.reveal("#work-experience .container", {});
sr.reveal("#contact .container", {});

// Reveal individual skill cards with cascade effect
sr.reveal("#skills .grid > div", {
  interval: 100,
  delay: 300,
});

// Reveal individual project cards with cascade effect
sr.reveal("#work-experience .grid > div", {
  interval: 100,
  delay: 300,
});

// Scroll to top functionality
const scrollToTopButton = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollToTopButton.style.display = "flex";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Chat functionality
const chatForm = document.getElementById("chat-form");
const messageInput = document.getElementById("message-input");
const chatMessages = document.getElementById("chat-messages");

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = messageInput.value.trim();

  if (message) {
    addUserMessage(message);
    addBotResponse();
    messageInput.value = "";
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
});

function addUserMessage(message) {
  const userMessage = `
    <div class="flex items-start justify-end">
      <div class="mr-4 bg-primary text-white rounded-lg p-4 max-w-[80%]">
        <p>${message}</p>
      </div>
      <div class="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-300 font-bold shrink-0">
        Y
      </div>
    </div>
  `;
  chatMessages.insertAdjacentHTML("beforeend", userMessage);
}

function addBotResponse() {
  const botResponse = `
    <div class="flex items-start">
      <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold shrink-0">
        P
      </div>
      <div class="ml-4 bg-gray-100 dark:bg-gray-700 rounded-lg p-4 max-w-[80%]">
        <p class="text-gray-800 dark:text-gray-200 mb-4">
          Thanks for reaching out! Here's how you can contact me:
        </p>
        <div class="space-y-3">
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <a href="tel:+84365454067" class="text-primary hover:underline">036 5454 067</a>
          </div>
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a href="mailto:trieuphuisme@gmail.com" class="text-primary hover:underline">trieuphuisme@gmail.com</a>
          </div>
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            <a href="https://drive.google.com/file/d/1j4eDXZ2SUkHGO0woQ3Z2F9HV4yc7IH--/view?usp=sharing" target="_blank" class="text-primary hover:underline">My CV</a>
          </div>
        </div>
      </div>
    </div>
  `;
  setTimeout(() => {
    chatMessages.insertAdjacentHTML("beforeend", botResponse);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }, 1000);
}

// Timeline functionality
function autoScrollTimeline() {
  const container = document.getElementById("timelineContainer");
  const cards = Array.from(container.children);
  const cardWidth = 320;
  let currentIndex = 0;
  let autoScrollInterval;
  let hoverInterval;

  function removeHoverFromAll() {
    cards.forEach((card) => {
      card.classList.remove(
        "group-hover:-translate-y-2",
        "group-hover:shadow-2xl"
      );
      const cardContent = card.querySelector(".bg-white");
      cardContent.classList.remove(
        "transform",
        "-translate-y-2",
        "shadow-2xl",
        "border-primary",
        "border-secondary",
        "border-indigo-500",
        "border-purple-500"
      );
      cardContent.classList.add("border-transparent");
    });
  }

  function addHoverToCard(index) {
    removeHoverFromAll();
    const card = cards[index];
    card.classList.add("group-hover:-translate-y-2", "group-hover:shadow-2xl");

    const cardContent = card.querySelector(".bg-white");
    cardContent.classList.add("transform", "-translate-y-2", "shadow-2xl");

    const borderClasses = [
      "border-primary",
      "border-secondary",
      "border-indigo-500",
      "border-purple-500",
    ];
    if (index < borderClasses.length) {
      cardContent.classList.add(borderClasses[index]);
      cardContent.classList.remove("border-transparent");
    }
  }

  function startIntervals() {
    clearInterval(autoScrollInterval);
    clearInterval(hoverInterval);

    autoScrollInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % cards.length;
      container.scrollTo({
        left: currentIndex * cardWidth,
        behavior: "smooth",
      });
    }, 1200);

    hoverInterval = setInterval(() => {
      addHoverToCard(currentIndex);
    }, 1200);
  }

  startIntervals();

  container.addEventListener("mouseenter", () => {
    clearInterval(autoScrollInterval);
    clearInterval(hoverInterval);
    removeHoverFromAll();
  });

  container.addEventListener("mouseleave", () => {
    startIntervals();
  });

  container.addEventListener("scroll", () => {
    const scrollPosition = container.scrollLeft;
    currentIndex = Math.round(scrollPosition / cardWidth);
  });
}

function toggleReadMore(button) {
  const content = button.previousElementSibling;
  content.classList.toggle("hidden");
  button.textContent = content.classList.contains("hidden")
    ? "Read More"
    : "Read Less";
}

function typeWriter() {
  const text = "UX/UI and Graphic Designer";
  const element = document.querySelector(".typewriter-text");
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 4000;

  function type(index = 0) {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      setTimeout(() => type(index + 1), typingSpeed);
    } else {
      setTimeout(deleteText, pauseTime);
    }
  }

  function deleteText() {
    const currentText = element.textContent;
    if (currentText.length > 0) {
      element.textContent = currentText.slice(0, -1);
      setTimeout(deleteText, deletingSpeed);
    } else {
      setTimeout(() => type(), 500);
    }
  }

  type();
}

// Initialize when page loads
document.addEventListener("DOMContentLoaded", () => {
  autoScrollTimeline();
  typeWriter();
});
