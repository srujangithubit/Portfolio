import { NextResponse } from "next/server";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

export async function GET() {
  const pdf = await PDFDocument.create();
  let page = pdf.addPage([595.28, 841.89]);
  const font = await pdf.embedFont(StandardFonts.Helvetica);
  const boldFont = await pdf.embedFont(StandardFonts.HelveticaBold);

  const margin = 48;
  let y = 785;
  const contentWidth = 595.28 - margin * 2;

  const writeLine = (
    text: string,
    size = 11,
    color = rgb(0.92, 0.92, 0.92),
    fontFace = font
  ) => {
    page.drawText(text, { x: margin, y, size, font: fontFace, color });
    y -= size + 7;
  };

  const wrapText = (text: string, size = 10, fontFace = font) => {
    const words = text.split(" ");
    const lines: string[] = [];
    let current = "";

    for (const word of words) {
      const next = current ? `${current} ${word}` : word;
      const width = fontFace.widthOfTextAtSize(next, size);

      if (width > contentWidth && current) {
        lines.push(current);
        current = word;
      } else {
        current = next;
      }
    }

    if (current) {
      lines.push(current);
    }

    return lines;
  };

  const writeParagraph = (
    text: string,
    size = 10,
    color = rgb(0.88, 0.88, 0.88),
    fontFace = font
  ) => {
    const lines = wrapText(text, size, fontFace);
    for (const line of lines) {
      ensureSpace(70);
      writeLine(line, size, color, fontFace);
    }
  };

  const writeSectionTitle = (text: string) => {
    ensureSpace(90);
    page.drawText(text, {
      x: margin,
      y,
      size: 13,
      font: boldFont,
      color: rgb(1, 1, 1),
    });
    y -= 18;
  };

  const writeBullet = (
    text: string,
    size = 10,
    color = rgb(0.88, 0.88, 0.88)
  ) => {
    const bullet = "• ";
    const bulletWidth = font.widthOfTextAtSize(bullet, size);
    const availableWidth = contentWidth - bulletWidth;
    const words = text.split(" ");
    const lines: string[] = [];
    let current = "";

    for (const word of words) {
      const next = current ? `${current} ${word}` : word;
      const width = font.widthOfTextAtSize(next, size);

      if (width > availableWidth && current) {
        lines.push(current);
        current = word;
      } else {
        current = next;
      }
    }

    if (current) {
      lines.push(current);
    }

    lines.forEach((line, index) => {
      ensureSpace(70);
      page.drawText(index === 0 ? `${bullet}${line}` : line, {
        x: index === 0 ? margin : margin + bulletWidth,
        y,
        size,
        font,
        color,
      });
      y -= size + 7;
    });
  };

  const ensureSpace = (spaceNeeded = 60) => {
    if (y < spaceNeeded) {
      page = pdf.addPage([595.28, 841.89]);
      y = 785;
    }
  };

  page.drawText("SRUJAN JAVAREGOWDA", {
    x: margin,
    y,
    size: 24,
    font: boldFont,
    color: rgb(1, 1, 1),
  });
  y -= 28;
  writeLine(
    "Bengaluru, India | +91 9972728100 | srujangeethajavaregowda@gmail.com | linkedin.com/in/srujan-javaregowda | github.com/srujangithubit",
    9.5,
    rgb(0.78, 0.86, 1)
  );
  writeLine(" ");

  writeSectionTitle("PROFESSIONAL SUMMARY");
  writeParagraph(
    "Motivated Computer Science undergraduate at PES University with hands-on experience in Full-Stack Development, Artificial Intelligence, Computer Vision, and Web Technologies. Proven ability to design and develop innovative software solutions through multiple AI and web-based projects. Strong foundation in Python, JavaScript, FastAPI, React, and modern development practices. Active hackathon participant with multiple top placements and a passion for building scalable, user-centric technology solutions.",
    10,
    rgb(0.9, 0.9, 0.9)
  );
  writeLine(" ");

  writeSectionTitle("EDUCATION");
  writeLine(
    "Bachelor of Technology (B.Tech), Computer Science Engineering",
    11,
    rgb(0.92, 0.92, 0.92),
    boldFont
  );
  writeLine(
    "PES University, Bengaluru, India | 2024 - 2028",
    10,
    rgb(0.72, 0.72, 0.72)
  );
  writeLine(" ");

  writeSectionTitle("TECHNICAL SKILLS");
  writeParagraph(
    "Programming Languages: Python, JavaScript, TypeScript, SQL, HTML5, CSS3",
    10
  );
  writeParagraph(
    "Frontend Development: React.js, Next.js, Bootstrap, Responsive Web Design",
    10
  );
  writeParagraph(
    "Backend Development: FastAPI, Node.js, NestJS, REST APIs, WebSockets",
    10
  );
  writeParagraph("Databases: PostgreSQL, MongoDB, Redis", 10);
  writeParagraph(
    "CMS & Tools: WordPress, Git, GitHub, Docker, Postman, Playwright",
    10
  );
  writeParagraph(
    "AI & Computer Vision: OpenCV, Machine Learning, LLM Integration, Computer Vision",
    10
  );
  writeLine(" ");

  writeSectionTitle("PROJECTS");
  writeLine(
    "TradePro - Trading & Analytics Platform",
    11,
    rgb(0.95, 0.95, 0.95),
    boldFont
  );
  writeParagraph(
    "Technologies: Python, JavaScript, HTML, CSS, Data Analytics Tools",
    10,
    rgb(0.82, 0.82, 0.82)
  );
  writeBullet(
    "Engineered a data-driven platform with interactive dashboards for real-time market monitoring and performance analysis."
  );
  writeBullet(
    "Transformed complex financial datasets into actionable insights using an optimized, user-centric interface."
  );
  writeLine(" ");

  writeLine(
    "WheelSafar - AI-Powered Smart Mobility Platform",
    11,
    rgb(0.95, 0.95, 0.95),
    boldFont
  );
  writeParagraph(
    "Technologies: Python, FastAPI, OpenCV, Computer Vision, AI/ML, HTML, CSS, JavaScript",
    10,
    rgb(0.82, 0.82, 0.82)
  );
  writeBullet(
    "Built an AI mobility platform utilizing Computer Vision for real-time driver behavior monitoring (drowsiness, fatigue, distraction)."
  );
  writeBullet(
    "Designed intelligent safety analytics and scalable backend services to actively mitigate road accident risks."
  );
  writeLine(" ");

  writeLine(
    "Jarvis - AI Virtual Assistant",
    11,
    rgb(0.95, 0.95, 0.95),
    boldFont
  );
  writeParagraph(
    "Technologies: Python, FastAPI, LLM APIs, HTML, CSS, JavaScript",
    10,
    rgb(0.82, 0.82, 0.82)
  );
  writeBullet(
    "Developed a conversational AI assistant leveraging LLM integrations to process and respond to complex natural language queries."
  );
  writeBullet(
    "Automated repetitive user workflows and task management through a scalable, intelligent backend architecture."
  );
  writeLine(" ");

  writeLine(
    "AirTouch - Gesture-Based Interaction System",
    11,
    rgb(0.95, 0.95, 0.95),
    boldFont
  );
  writeParagraph(
    "Technologies: Python, OpenCV, Computer Vision",
    10,
    rgb(0.82, 0.82, 0.82)
  );
  writeBullet(
    "Created a touchless interaction system utilizing OpenCV for real-time hand tracking and motion detection."
  );
  writeBullet(
    "Engineered intuitive gesture-based commands to enhance device accessibility and enable a hands-free user experience."
  );
  writeLine(" ");

  writeSectionTitle("ACHIEVEMENTS & CERTIFICATIONS");
  writeBullet(
    "Hackathons: Secured Top 12 position in 4 university-level hackathons and Top 10 in 1 university-level hackathon. Demonstrated leadership, rapid prototyping, and problem-solving skills across multidisciplinary teams."
  );
  writeBullet(
    "Open Source: Girl Script Summer of Code (GSSoC) 2025 Contributor."
  );
  writeBullet(
    "Certifications: Web Development Certification (Udemy), Python Programming (HackerRank), Problem Solving (HackerRank), API Fundamentals (Postman)."
  );
  writeBullet(
    "Workshops: Participated in multiple advanced AI/ML and Neural Technology workshops."
  );
  writeLine(" ");

  writeSectionTitle("LANGUAGES & INTERESTS");
  writeParagraph(
    "Languages: English (Proficient), Kannada (Native), Hindi (Fluent), Telugu (Fluent) | Interests: Artificial Intelligence, Machine Learning, Computer Vision, Full-Stack Development, Product Development, Forex Market Trading, Emerging Technologies, Hackathons",
    10,
    rgb(0.88, 0.88, 0.88)
  );

  const bytes = await pdf.save();
  const body = Buffer.from(bytes);

  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition":
        'attachment; filename="Srujan_Javaregowda_Resume.pdf"',
      "Cache-Control": "no-store",
    },
  });
}
