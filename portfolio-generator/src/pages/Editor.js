import React, { useState } from "react";
import Preview from "./Preview";
import { FaGithub, FaLink, FaReact, FaJs, FaCss3Alt, FaHtml5 } from "react-icons/fa"; // Importing icons

const Editor = () => {
  // State to hold the selected template and form details
  const [selectedTemplate, setSelectedTemplate] = useState("template1");
  const [formDetails, setFormDetails] = useState({
    name: "",
    title: "",
    bio: "",
    skills: "",
    projects: [
      {
        name: "",
        github: "",
        hosted: "",
      },
    ],
  });

  // Skills icon mapping (could expand with more icons)
  const skillIcons = {
    React: <FaReact />,
    JavaScript: <FaJs />,
    HTML: <FaHtml5 />,
    CSS: <FaCss3Alt />,
  };

  // Templates with placeholders for dynamic content
  const templates = {
    template1: {
      title: "My Portfolio - Template 1",
      templateContent: (details) => {
        const skillsList = details.skills.split(",").map((skill) => skill.trim());
        const projectsList = details.projects.map((project) => `
          <div>
            <h4 class="text-xl font-semibold">${project.name}</h4>
            <p><strong>GitHub:</strong> <a href="${project.github}" target="_blank" class="text-blue-600"><FaGithub /> Go to GitHub</a></p>
            <p><strong>Live Demo:</strong> <a href="${project.hosted}" target="_blank" class="text-blue-600"><FaLink /> Visit</a></p>
          </div>
        `).join("");

        return `
          <h1 class="text-4xl font-bold">${details.name || "Your Name"}</h1>
          <h2 class="text-2xl text-gray-700">${details.title || "Your Title"}</h2>
          <p class="mt-4">${details.bio || "Short bio about you."}</p>

          <h3 class="text-2xl font-semibold mt-6">Skills</h3>
          <ul class="list-disc pl-5">
            ${skillsList.map(skill => `
              <li>${skillIcons[skill] || skill}</li>
            `).join('')}
          </ul>

          <h3 class="text-2xl font-semibold mt-6">Projects</h3>
          ${projectsList}
        `;
      },
    },
    // Other templates (template2 and template3) will follow the same structure
  };

  const handleTemplateChange = (template) => {
    setSelectedTemplate(template);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  const handleProjectChange = (index, e) => {
    const { name, value } = e.target;
    const newProjects = [...formDetails.projects];
    newProjects[index][name] = value;
    setFormDetails({ ...formDetails, projects: newProjects });
  };

  const handleAddProject = () => {
    setFormDetails({
      ...formDetails,
      projects: [
        ...formDetails.projects,
        { name: "", github: "", hosted: "" },
      ],
    });
  };

  return (
    <div className="flex">
      {/* Left Panel - Template Selection and Editing */}
      <div className="w-1/3 p-6">
        <h2 className="text-2xl font-bold mb-4">Choose Template</h2>
        <div className="space-y-4">
          {Object.keys(templates).map((template) => (
            <button
              key={template}
              onClick={() => handleTemplateChange(template)}
              className={`block w-full py-2 px-4 rounded-lg text-white ${
                selectedTemplate === template ? "bg-indigo-600" : "bg-gray-400"
              }`}
            >
              {templates[template].title}
            </button>
          ))}
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-2">Enter Your Information</h3>

          {/* Form for user input */}
          <form>
            <div className="mb-4">
              <label className="block text-lg font-medium" htmlFor="name">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 border rounded-lg"
                value={formDetails.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium" htmlFor="title">
                Title/Role
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="w-full p-2 border rounded-lg"
                value={formDetails.title}
                onChange={handleInputChange}
                placeholder="Enter your title/role"
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium" htmlFor="bio">
                Short Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                className="w-full p-2 border rounded-lg"
                rows="4"
                value={formDetails.bio}
                onChange={handleInputChange}
                placeholder="Write a short bio"
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium" htmlFor="skills">
                Skills (comma-separated)
              </label>
              <input
                type="text"
                id="skills"
                name="skills"
                className="w-full p-2 border rounded-lg"
                value={formDetails.skills}
                onChange={handleInputChange}
                placeholder="Enter skills"
              />
            </div>

            {/* Project Details */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Projects</h3>
              {formDetails.projects.map((project, index) => (
                <div key={index} className="mb-4">
                  <label className="block text-md font-medium">Project {index + 1}</label>
                  <input
                    type="text"
                    name="name"
                    value={project.name}
                    onChange={(e) => handleProjectChange(index, e)}
                    placeholder="Project Name"
                    className="w-full p-2 border rounded-lg"
                  />
                  <input
                    type="text"
                    name="github"
                    value={project.github}
                    onChange={(e) => handleProjectChange(index, e)}
                    placeholder="GitHub Link"
                    className="w-full p-2 border rounded-lg mt-2"
                  />
                  <input
                    type="text"
                    name="hosted"
                    value={project.hosted}
                    onChange={(e) => handleProjectChange(index, e)}
                    placeholder="Hosted Link"
                    className="w-full p-2 border rounded-lg mt-2"
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={handleAddProject}
                className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-lg"
              >
                Add Another Project
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Right Panel - Preview */}
      <div className="w-2/3 p-6 bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">Preview</h2>
        <Preview content={templates[selectedTemplate].templateContent(formDetails)} />
      </div>
    </div>
  );
};

export default Editor;
