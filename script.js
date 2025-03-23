document.addEventListener("DOMContentLoaded", () => {
    const contentArea = document.getElementById("content-area");
    const navLinks = document.querySelectorAll("nav a");
    const sections = {
        "hero": document.getElementById("hero"),
        "community-mentalhealth": document.getElementById("community-mentalhealth"),
        "mom-dates": document.getElementById("mom-dates"),
        "resources": document.getElementById("resources"),
        "login": document.getElementById("login"),
        "account": document.getElementById("account"),
    };

    function showSection(sectionId) {
        for (const id in sections) {
            sections[id].style.display = id === sectionId ? "block" : "none";
        }
    }

    navLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const sectionId = link.getAttribute("href").substring(1);
            showSection(sectionId);
            history.pushState({ section: sectionId }, "", `#${sectionId}`);
        });
    });

    window.addEventListener("popstate", (event) => {
        if (event.state && event.state.section) {
            showSection(event.state.section);
        } else {
            showSection("hero"); // Default to hero on initial load
        }
    });

    // Initial load
    if (window.location.hash) {
        showSection(window.location.hash.substring(1));
    } else {
        showSection("hero"); // Default to hero on initial load
    }

    // Example event listeners (you'll need to add your backend logic)
    document.getElementById("join-button").addEventListener("click", () => {
        alert("Join button clicked!");
    });

    document.getElementById("post-button").addEventListener("click", () => {
        alert("Post button clicked!");
    });

    document.getElementById("support-button").addEventListener("click", () => {
        alert("Find support button clicked!");
    });

    document.getElementById("login-button").addEventListener("click", () => {
        alert("Login button clicked!");
    });
});