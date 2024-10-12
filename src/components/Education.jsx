
function Education() {
  const education = [
    { title: "Higher Secondary Level", year: "2022-2024" },
    { title: "Secondary Level Examination", year: "2022" },
  ];

  return (
    <div className="mx-2" style={{ margin: "20px" }}>
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {education.map(({ title, year }, index) => (
          <li key={index} className="mb-10 ml-4">
            <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <p className="mb-1 text-sm font-normal leading-none text-white">
              {year} AD
            </p>
            <h3 className="text-4xl font-semibold text-white">
              {title}
            </h3>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Education;
