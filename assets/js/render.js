const projectsContainer = document.getElementById("frontend");

export function renderProjects(projects) {
    projects.forEach(project => {
        projectsContainer.innerHTML += `
            <div class="col-12">
                <div class="card shadow border-0 rounded-4 overflow-hidden mb-4">
                    <div class="row g-0 align-items-center">

                        <div class="col-md-4 d-flex align-items-center">
                            <img 
                                src="${project.imgUrl}" 
                                class="img-fluid rounded-start"
                                alt="${project.title}"
                            >
                        </div>

                        <div class="col-md-8">
                            <div class="card-body p-4">

                                <div class="mb-2">
                                    <span class="badge bg-primary rounded-pill">
                                        Frontend
                                    </span>
                                </div>

                                <h3 class="fw-bold mb-3">
                                    ${project.title}
                                </h3>

                                <p class="text-secondary lh-lg">
                                    ${project.description}
                                </p>

                                <p class="fw-semibold mb-3">
                                    Let's see the demo or source code!
                                </p>

                                <div class="d-flex gap-2 flex-wrap">

                                    <a href="${project.demoUrl}" 
                                       target="_blank" 
                                       class="btn btn-outline-primary px-4">
                                        <i class="bi bi-eye-fill me-1"></i>
                                        Live Demo
                                    </a>

                                    <a href="${project.sourceUrl}" 
                                       target="_blank" 
                                       class="btn btn-dark px-4">
                                        <i class="bi bi-github me-1"></i>
                                        Source Code
                                    </a>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        `;
    });
}