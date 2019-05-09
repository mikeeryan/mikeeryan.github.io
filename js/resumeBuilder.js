var bio = {
	"name": "Michael Eryan",
	"role": "Data Analyst",
	"contacts": {
		"email": "mike.m.eryan@gmail.com",
		"github": "mikeeryan",
		"location": "Centennial, CO"
	},
	"picture": "images/Michael_Eryan_200.jpg",
	"welcomeMessage": "Master's educated data analysis professional with extensive experience providing analytical solutions "+
		"in support of key organizational goals and objectives.  Skilled at conducting detailed analysis of current business situations, "+
		"implementing business solutions that drive increases in operational efficiency and effectiveness. "+
		"Unique in the ability to combine a strong understanding of business trends, statistics and economics "+
		"with a technical background used to resolve a wide-range of business issues.  Recognized for the ability "+
		"to deliver exceptional results working in fast-pace, highly dynamic business environments.",
	"skills": ["technical solutions","analytic leadership", "statistics", "predictive modeling", "machine learning", "SAS", "SQL", "R", "Python"]
};

var certs = {
	"cert" : ["Udacity:",
		"&nbsp;	Machine Learning Engineer Nanodegree, (2018)",
		"&nbsp;	Data Analyst Nanodegree, (2017)",
		"",
		"SAS Institute Certifications:",
		"&nbsp;	SAS Certified Statistical Business Analyst Using SAS 9: Regression and Modeling, (2015)",
		"&nbsp;	SAS Certified Advanced Programmer for SAS 9, (2011)",
		"&nbsp;	SAS Certified Base Programmer for SAS 9, (2010)",
		"",
		"Oracle University Certifications:",
		"&nbsp;	Oracle PL/SQL Developer Certified Associate, (2015)",
		"&nbsp;	Oracle Database 11g Administrator Certified Associate, (2012)",
		"&nbsp;	Oracle Database SQL Expert, (2011)",
		"&nbsp;"
		]
}

var work = {
	"jobs": [
				{
					"employer": "Charles Schwab",
					"title": "Senior Manager - Database Marketing Campaign Analyst - Data-Driven Communications - Analytics & Business Insight ",
					"location": "Lone Tree, Colorado",
					"datesWorked": "2017-Present",
					"description": "\u2022 Envisioned a new data processing methodology to ensure accuracy, efficiency, transparency, flexibility and scalability using SAS macros and workflows.  "+
						"<br> \u2022 Built dozens of modularized SAS macros using data step and SQL to support large scale cash product projects that had a high impact to Schwab's bottom line. "+
						"<br> \u2022 Acted as an internal consultant to business partners to assess their decision-making, reporting and marketing needs, and recommended appropriate metrics, either from existing reports or from newly developed reports."+
						"<br> \u2022 Researched, analyzed and leveraged data from a wide range of internal and external sources to generate accurate and comprehensive direct marketing lists. "+
						"<br> \u2022 Developed and applied a deep and broad understanding of the underlying business & marketing issues that the reports and analyses were intended to address, in order to ensure their accuracy & relevance. "
				},

				{
					"employer": "Western Union",
					"title": "Senior Statistical Analyst - Global Analytics and Insights ",
					"location": "Englewood, Colorado",
					"datesWorked": "2011-2017",
					"description": "\u2022 Built advanced programs in SAS using 'data' step, 'proc sql,' and the macro language. "+
						"<br> \u2022 Developed complex SQL scripts in both Oracle and Netezza RDBMS to produce reports and prepare data for modeling."+
						"<br> \u2022 Designed SQL pass-through queries using SAS macro language to efficiently process large amounts of data in Oracle and Netezza. "+
						"<br> \u2022 Took the initiative to build new professional partnerships and learn new technical skills to install, configure and maintain statistical software and to fill in the existing gap between the department's developers and the IT department."+
						"<br> \u2022 Performed Windows Server 2012 R2 and SAS 9.4 Business Intelligence platform administration and Redhat Linux and RStudio Server Pro configuration and administration."+
						"<br> \u2022 Lead in terms of predictive modeling, using logistic regression in SAS and machine learning techniques in R to support the digital business team in creating predictive models for marketing campaigns and risk assessments. "+
						"<br> \u2022 Developed and implemented an in-house A/B Testing methodology, using 3rd party software to successfully design and analyze marketing, pricing, direct mail and email test-and-learn campaigns. "+
						"<br> \u2022 Summarized, presented and interpreted key findings in both written and verbal form to colleagues and superiors to improve decision making abilities. "+
						"<br> \u2022 Mentored junior analysts and other colleagues on the use of new software, programming and statistical foundations to increase both individual and team performance. "+
						"<br> \u2022 Managed a vendor competition to choose the best forecasting software including creating a new forecasting process for the global business channels that allowed for more informed strategic decision making."+
						"<br> \u2022 Worked in collaboration with an industry leading vendor to develop and manage the global growth decomposition tool, Marketing Mix Model."+
						"<br> \u2022 Played a key role managing the projects that required collaboration with IT and business partners, the acquisition of new hardware and software and the training and outsourcing of processes to a number of offshore teams."+
						"<br> \u2022 Correctly analyzed various pricing and marketing campaigns through the use of advanced statistical techniques. "
				}
			]
		};

var education = {
	"onlineCourses": [
		{ "school": "Udacity",
			"title": "Machine Learning Engineer Nanodegree",
			"completed": "2018",
			"url": "https://www.udacity.com/course/machine-learning-engineer-nanodegree--nd009t"
		},
		{ "school": "Udacity",
			"title": "Data Analyst Nanodegree",
			"completed": "2017",
			"url": "https://www.udacity.com/course/data-analyst-nanodegree--nd002"
		}
	],

	"schools": [
		{
		"name" : "University of Colorado Denver",
		"datesAttended" : "2010",
		"degree" : "Masters of Arts",
		"major" : "Economics",
		"url" : "http://www.ucdenver.edu/academics/colleges/CLAS/Departments/economics/Programs/MasterofArts/Pages/Overview.aspx"
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Machine Learning Engineer Portfolio",
			"datesWorked": "2018",
			"description": "Including projects in machine learning - supervised learning, unsupervised learning, deep learning, reinforcement learning.",
			"url": "https://mikeeryan.github.io/portfolio.html"
		},
		{
			"title": "Data Analyst Portfolio",
			"datesWorked": "2017",
			"description": "Including projects in exploratory data analysis, statistics, machine learning, A/B testing etc.",
			"url": "https://mikeeryan.github.io/portfolio.html"
		}
	]
};

/* Insert content */

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for(i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

for(i in formattedContactInfo) {
	$("#topContacts").append(formattedContactInfo[i]);
	$("#footerContacts").append(formattedContactInfo[i]);
}

/* Certifications */
/*fn for certs, runs  only once though,hmm */
function displayCert() {

	if(certs.cert.length > 0) {
		$("#certicates").append(HTMLcertStart);
		for(i in certs.cert) {
			var formattedCertDescription = HTMLcertDescription.replace("%data%", certs.cert[i]);
			$(".cert-entry:last").append(formattedCertDescription);
		}
	}

}

displayCert();

/* fn for certs - only runs once though*/


/* fn for work */
function displayWork() {

	if(work.jobs.length > 0) {

		$("#workExperience").append(HTMLworkStart);

		for(i in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedDatesWorked);
			$(".work-entry:last").append(formattedWorkDescription);
		}

	}

}

displayWork();


projects.display = function() {
	if(projects.projects.length > 0) {
		for(i in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

			for(img in projects.projects[i].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
				$(".project-entry:last").append(formattedProjectImage);
			}


		}
	}
}

projects.display();

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(i in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
			var formattedSchoolMinor = HTMLschoolMinor.replace("%data%", education.schools[i].minor);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolMajor);
		}

		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(i in education.onlineCourses) {
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);

			}
		}

	}
}

education.display();
