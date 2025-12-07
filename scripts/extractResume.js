const fs = require('fs');
const pdf = require('pdf-parse');

const pdfPath = './public/resume.pdf'; // put your resume here

if (!fs.existsSync(pdfPath)) {
  console.error('Put resume.pdf into public/ folder and re-run: npm run extract-resume');
  process.exit(1);
}

const dataBuffer = fs.readFileSync(pdfPath);

pdf(dataBuffer).then(function(data) {
  // data.text contains extracted text
  const text = data.text.replace(/\r\n/g, '\n').split('\n').map(s=>s.trim()).filter(Boolean);
  const resume = { rawText: data.text, lines: text };
  fs.writeFileSync('./resume.json', JSON.stringify(resume, null, 2));
  console.log('resume.json created. Open and edit content to fit site.');
}).catch(err => {
  console.error('Error parsing PDF:', err);
});
