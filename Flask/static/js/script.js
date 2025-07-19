// ---------------- For dynamically updation of option in Job title ----------
 const jobTitles = [
            "Account Manager", "Accountant", "Administrative Assistant", "Business Analyst",
            "Business Development Manager", "Business Intelligence Analyst", "CEO", 
            "Chief Data Officer", "Chief Technology Officer", "Content Marketing Manager", 
            "Copywriter", "Creative Director", "Customer Service Manager", "Customer Service Rep", 
            "Customer Service Representative", "Customer Success Manager", "Customer Success Rep", 
            "Data Analyst", "Data Entry Clerk", "Data Scientist", "Digital Content Producer", 
            "Digital Marketing Manager", "Director", "Director of Business Development", 
            "Director of Engineering", "Director of Finance", "Director of HR", "Director of Human Capital", 
            "Director of Human Resources", "Director of Marketing", "Director of Operations", 
            "Director of Product Management", "Director of Sales", "Director of Sales and Marketing", 
            "Event Coordinator", "Financial Advisor", "Financial Analyst", "Financial Manager", 
            "Graphic Designer", "Help Desk Analyst", "HR Generalist", "HR Manager", "Human Resources Director", 
            "IT Manager", "IT Support", "IT Support Specialist", "Junior Account Manager", "Junior Accountant", 
            "Junior Advertising Coordinator", "Junior Business Analyst", "Junior Business Development Associate", 
            "Junior Business Operations Analyst", "Junior Copywriter", "Junior Customer Support Specialist", 
            "Junior Data Analyst", "Junior Data Scientist", "Junior Designer", "Junior Developer", 
            "Junior Financial Advisor", "Junior Financial Analyst", "Junior HR Coordinator", "Junior HR Generalist", 
            "Junior Marketing Analyst", "Junior Marketing Coordinator", "Junior Marketing Manager", 
            "Junior Marketing Specialist", "Junior Operations Analyst", "Junior Operations Coordinator", 
            "Junior Operations Manager", "Junior Product Manager", "Junior Project Manager", "Junior Recruiter", 
            "Junior Research Scientist", "Junior Sales Representative", "Junior Social Media Manager", 
            "Junior Social Media Specialist", "Junior Software Developer", "Junior Software Engineer", 
            "Junior UX Designer", "Junior Web Designer", "Junior Web Developer", "Marketing Analyst", 
            "Marketing Coordinator", "Marketing Manager", "Marketing Specialist", "Network Engineer", "Office Manager", 
            "Operations Analyst", "Operations Director", "Operations Manager", "Principal Engineer", 
            "Principal Scientist", "Product Designer", "Product Manager", "Product Marketing Manager", 
            "Project Engineer", "Project Manager", "Public Relations Manager", "Recruiter", "Research Director", 
            "Research Scientist", "Sales Associate", "Sales Director", "Sales Executive", "Sales Manager", 
            "Sales Operations Manager", "Sales Representative", "Senior Account Executive", "Senior Account Manager", 
            "Senior Accountant", "Senior Business Analyst", "Senior Business Development Manager", "Senior Consultant", 
            "Senior Data Analyst", "Senior Data Engineer", "Senior Data Scientist", "Senior Engineer", 
            "Senior Financial Advisor", "Senior Financial Analyst", "Senior Financial Manager", 
            "Senior Graphic Designer", "Senior HR Generalist", "Senior HR Manager", "Senior HR Specialist", 
            "Senior Human Resources Coordinator", "Senior Human Resources Manager", "Senior Human Resources Specialist", 
            "Senior IT Consultant", "Senior IT Project Manager", "Senior IT Support Specialist", "Senior Manager", 
            "Senior Marketing Analyst", "Senior Marketing Coordinator", "Senior Marketing Director", 
            "Senior Marketing Manager", "Senior Marketing Specialist", "Senior Operations Analyst", 
            "Senior Operations Coordinator", "Senior Operations Manager", "Senior Product Designer", 
            "Senior Product Development Manager", "Senior Product Manager", "Senior Product Marketing Manager", 
            "Senior Project Coordinator", "Senior Project Manager", "Senior Quality Assurance Analyst", 
            "Senior Research Scientist", "Senior Researcher", "Senior Sales Manager", "Senior Sales Representative", 
            "Senior Scientist", "Senior Software Architect", "Senior Software Developer", "Senior Software Engineer", 
            "Senior Training Specialist", "Senior UX Designer", "Social Media Manager", "Social Media Specialist", 
            "Software Developer", "Software Engineer", "Software Manager", "Software Project Manager", 
            "Strategy Consultant", "Supply Chain Analyst", "Supply Chain Manager", "Technical Recruiter", 
            "Technical Support Specialist", "Technical Writer", "Training Specialist", "UX Designer", "UX Researcher", 
            "VP of Finance", "VP of Operations", "Web Developer"
        ];

        const selectElement = document.getElementById('job_titles');
        
        // Dynamically populate the options
        jobTitles.forEach((title, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = title;
            selectElement.appendChild(option);
        });

// Auto close toggle on outside click
document.addEventListener('click', function (event) {
    const isClickInside = document.querySelector('.navbar').contains(event.target);
    const navbarCollapse = document.getElementById('myNavbar');

    if (!isClickInside && navbarCollapse.classList.contains('in')) {
      $('.navbar-toggle').click(); // triggers collapse
    }
  });