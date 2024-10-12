import { Download, X } from "lucide-react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas"; // Import html2canvas

function Cv() {
  const education = [
    { Title: "Higher Secondary Level", Year: "2022-2024" },
    { Title: "Secondary Level Examination", Year: "2022" },
  ];

  const skills = [
    { Title: "MERN Stack" },
    { Title: "C" },
    { Title: "PHP" },
    { Title: "Docker" },
    { Title: "Git" },
    { Title: "Linux" },
  ];

  const hobbies = ["Exploring", "Reading Books", "Learning new technology"];

  // Function to handle PDF download
  const handleDownload = () => {
    const input = document.getElementById("cv"); // The div with CV content

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("portrait", "mm", "a4");
      const imgWidth = 190; // Image width in mm (adjust as needed)
      const pageHeight = pdf.internal.pageSize.height;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("CV.pdf"); // Save the PDF
    });
  };

  return (
    <div className="flex flex-col items-center">
      {/* Buttons Section (stacked vertically) */}
      <div className="flex flex-col mb-4 w-full items-end" style={{ margin: "1.4in 0" }}>
        <button
          onClick={handleDownload}
          className="flex items-center justify-center bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full w-12 h-12 shadow-lg hover:shadow-xl mb-2"
        >
          <Download className="w-6 h-6" />
        </button>
        <button
          className="flex items-center justify-center bg-gradient-to-r from-red-400 to-red-600 text-white rounded-full w-12 h-12 shadow-lg hover:shadow-xl"
          onClick={() => window.close()}
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <div
        id="cv" // Set an ID for the element to convert to PDF
        className="bg-white p-8 shadow-lg rounded-lg"
        style={{ width: "210mm", height: "297mm" }} // A4 size
      >
        {/* Header Section */}
        <header className="flex justify-between items-center mb-6">
          <div>
            <h1
              className="font-bold text-gray-900"
              style={{ fontSize: "50px" }}
            >
              Rajeev Puri
            </h1>
            <h2
              className="text-lg text-gray-600"
              style={{ fontSize: "20px" }}
            >
              Student
            </h2>
          </div>
          <div className="text-right" style={{ fontSize: "16px" }}>
            <p className="text-gray-600">
              +977 9863479223
            </p>
            <p className="text-gray-600">
              razeev.puree@gmail.com
            </p>
            <p className="text-gray-600">
              Changunaryan 08, Bhaktapur
            </p>
          </div>
        </header>

        {/* Content Section */}
        <div className="flex">
          {/* Left Column: Profile & Work Experience */}
          <div className="w-1/2 pr-8">
            {/* Profile Section */}
            <section className="mb-8">
              <h2
                className="text-2xl font-semibold text-gray-900 mb-2"
                style={{ fontSize: "26px" }}
              >
                Profile
                <hr className="mb-2"/>
              </h2>
              <p
                className="text-gray-700 text-justify"
                style={{ fontSize: "16px", lineHeight: "1.5" }}
              >
                I’m Rajeev Puri, a recent high school graduate with a strong
                passion for technology and software development. Having
                completed my +2, I’m currently exploring opportunities to
                further my education in computer science and software
                engineering. I have a deep interest in web development, and I’ve
                spent time honing my skills in the <b>MERN Stack</b> by working
                on personal projects and exploring the latest web technologies.
              </p>
            </section>

            {/* Work Experience Section */}
            <section className="mb-8">
              <h2
                className="text-2xl font-semibold text-gray-900 mb-2"
                style={{ fontSize: "26px" }}
              >
                Work Experience
              </h2>
              <p
                className="text-gray-700"
                style={{ fontSize: "14px", lineHeight: "1.5" }}
              >
                Currently, I am exploring opportunities in the field of web
                development, looking forward to gaining real-world experience
                and contributing to exciting projects.
              </p>
            </section>
          </div>

          {/* Divider Line */}
          <div className="border-l-2 border-gray-300"></div>

          {/* Right Column: Education & Skills */}
          <div className="w-1/2 pl-8">
            {/* Education Section */}
            <section className="mb-8">
              <h2
                className="text-2xl font-semibold text-gray-900 mb-2"
                style={{ fontSize: "26px" }}
              >
                Education
                <hr />
              </h2>
              {education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <ul
                    className="text-lg font-bold text-gray-800"
                    style={{ fontSize: "18px" }}
                  >
                    {edu.Title}
                  </ul>
                  <p className="text-gray-600" style={{ fontSize: "14px" }}>
                    {edu.Year}
                  </p>
                </div>
              ))}
            </section>

            {/* Skills Section */}
            <section className="mb-8">
              <h2
                className="text-2xl font-semibold text-gray-900 mb-2"
                style={{ fontSize: "26px" }}
              >
                Skills
              </h2>
              <ul
                className="list-disc pl-5 text-gray-700"
                style={{ fontSize: "18px" }}
              >
                {skills.map((skill, index) => (
                  <li key={index}>{skill.Title}</li>
                ))}
              </ul>
            </section>

            {/* Hobbies Section */}
            <section className="mb-8">
              <h2
                className="text-2xl font-semibold text-gray-900 mb-2"
                style={{ fontSize: "26px" }}
              >
                Hobbies
              </h2>
              <ul
                className="list-disc pl-5 text-gray-700"
                style={{ fontSize: "18px" }}
              >
                {hobbies.map((hobby, index) => (
                  <li key={index}>{hobby}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cv;
