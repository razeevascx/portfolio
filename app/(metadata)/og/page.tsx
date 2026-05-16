import React from "react";

/**
 * OG IMAGE GENERATOR THEME & CONSTANTS
 * Optimized for Next.js ImageResponse (Satori).
 */
const OG_THEME = {
  black: "#030303",
  zinc950: "#09090b",
  zinc900: "#18181b",
  zinc800: "#27272a",
  zinc700: "#3f3f46",
  zinc400: "#a1a1aa",
  blue: "#2883ff",
  white: "#ffffff",
};

/**
 * SHARED COMPONENTS
 */
const GridBackground = () => (
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: "flex",
      backgroundImage: `radial-gradient(circle at 2px 2px, ${OG_THEME.zinc900} 1px, transparent 0)`,
      backgroundSize: "24px 24px",
      opacity: 0.4,
      zIndex: -1,
    }}
  />
);

const LogoMark = () => (
  <div
    style={{
      width: "40px",
      height: "40px",
      backgroundColor: OG_THEME.white,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "8px",
    }}
  >
    <div
      style={{
        width: "20px",
        height: "20px",
        backgroundColor: OG_THEME.black,
        borderRadius: "4px",
      }}
    />
  </div>
);

/**
 * 1. HOME OG
 * Focus: High-level Brand Identity
 */
export const HomeOG = () => (
  <div
    style={{
      height: "100%",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      backgroundColor: OG_THEME.black,
      padding: "80px",
      position: "relative",
      overflow: "hidden",
    }}
  >
    <GridBackground />
    <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "60px" }}>
      <LogoMark />
      <span style={{ color: OG_THEME.white, fontSize: "24px", fontWeight: "bold", letterSpacing: "2px" }}>
        RAJEEVPURI.COM.NP
      </span>
    </div>

    <div style={{ display: "flex", flexDirection: "column", marginTop: "40px" }}>
      <h1
        style={{
          fontSize: "110px",
          fontWeight: "900",
          color: OG_THEME.white,
          margin: 0,
          lineHeight: 0.9,
          letterSpacing: "-4px",
        }}
      >
        WONDER_
      </h1>
      <h1
        style={{
          fontSize: "110px",
          fontWeight: "900",
          color: OG_THEME.blue,
          margin: 0,
          lineHeight: 0.9,
          letterSpacing: "-4px",
        }}
      >
        SHIP_10X.
      </h1>
    </div>

    <p style={{ color: OG_THEME.zinc400, fontSize: "28px", maxWidth: "800px", marginTop: "40px", lineHeight: 1.4 }}>
      Software Engineer building high-performance digital products that blend sound, reflection, and visual storytelling.
    </p>

    <div style={{ marginTop: "auto", display: "flex", gap: "40px" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ color: OG_THEME.zinc700, fontSize: "12px", fontWeight: "bold", letterSpacing: "2px" }}>ROLE</span>
        <span style={{ color: OG_THEME.white, fontSize: "18px", fontWeight: "bold" }}>Product Engineer</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ color: OG_THEME.zinc700, fontSize: "12px", fontWeight: "bold", letterSpacing: "2px" }}>LOC</span>
        <span style={{ color: OG_THEME.white, fontSize: "18px", fontWeight: "bold" }}>London, UK</span>
      </div>
    </div>
  </div>
);

/**
 * 2. SERVICES OG
 * Focus: Capability and Technical Stack
 */
export const ServicesOG = () => (
  <div
    style={{
      height: "100%",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      backgroundColor: OG_THEME.black,
      padding: "80px",
      position: "relative",
    }}
  >
    <GridBackground />
    <div
      style={{
        position: "absolute",
        top: 40,
        left: 40,
        color: OG_THEME.blue,
        fontSize: "12px",
        fontWeight: "bold",
        letterSpacing: "4px",
      }}
    >
      PROTOCOL // SERVICES
    </div>
    <h1
      style={{
        fontSize: "90px",
        fontWeight: "900",
        color: OG_THEME.white,
        marginBottom: "20px",
        fontStyle: "italic",
      }}
    >
      CORE_SERVICES
    </h1>
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "15px",
        marginTop: "40px",
      }}
    >
      {["Full-Stack Dev", "UI/UX Design", "Cloud DevOps", "System Arch"].map(
        (s, i) => (
          <div
            key={i}
            style={{
              padding: "20px 40px",
              border: `1px solid ${OG_THEME.blue}`,
              backgroundColor: `${OG_THEME.blue}10`,
              color: OG_THEME.blue,
              fontSize: "24px",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            {s}
          </div>
        ),
      )}
    </div>
  </div>
);

/**
 * 3. PROJECTS OG
 * Focus: Portfolio Showcase
 */
export const ProjectsOG = () => (
  <div
    style={{
      height: "100%",
      width: "100%",
      display: "flex",
      backgroundColor: OG_THEME.zinc950,
      padding: "80px",
      position: "relative",
    }}
  >
    <GridBackground />
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <span
        style={{
          color: OG_THEME.blue,
          fontSize: "16px",
          fontWeight: "bold",
          textTransform: "uppercase",
          letterSpacing: "8px",
          marginBottom: "20px",
        }}
      >
        PORTFOLIO
      </span>
      <h1
        style={{
          fontSize: "100px",
          fontWeight: "900",
          color: OG_THEME.white,
          margin: "0",
          lineHeight: 1,
        }}
      >
        SELECTED_
        <br />
        WORKS
      </h1>
      <p
        style={{ color: OG_THEME.zinc400, fontSize: "24px", maxWidth: "600px", marginTop: "40px" }}
      >
        Engineering high-performance digital products and scalable web systems.
      </p>
    </div>
    <div
      style={{
        width: "300px",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        justifyContent: "center",
      }}
    >
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          style={{
            height: "100px",
            backgroundColor: OG_THEME.zinc900,
            border: `1px solid ${OG_THEME.zinc800}`,
            borderLeft: `6px solid ${OG_THEME.blue}`,
          }}
        />
      ))}
    </div>
  </div>
);

/**
 * 4. ABOUT OG
 * Focus: Identity and Location
 */
export const AboutOG = () => (
  <div
    style={{
      height: "100%",
      width: "100%",
      display: "flex",
      alignItems: "center",
      backgroundColor: OG_THEME.black,
      padding: "100px",
      position: "relative",
    }}
  >
    <GridBackground />
    <div style={{ position: "relative", display: "flex" }}>
        <div style={{ position: "absolute", top: -10, left: -10, right: -10, bottom: -10, border: `2px solid ${OG_THEME.blue}`, borderRadius: "50px", opacity: 0.3 }} />
        <img
          src="https://avatars.githubusercontent.com/u/154011772?v=4"
          style={{
            width: "300px",
            height: "300px",
            borderRadius: "40px",
            border: `4px solid ${OG_THEME.zinc900}`,
            position: "relative",
          }}
        />
    </div>
    <div
      style={{ marginLeft: "80px", display: "flex", flexDirection: "column" }}
    >
      <span style={{ color: OG_THEME.zinc400, fontSize: "16px", fontWeight: "bold", letterSpacing: "4px", marginBottom: "10px" }}>IDENTITY_RECORD</span>
      <h1
        style={{
          fontSize: "90px",
          fontWeight: "900",
          color: OG_THEME.white,
          margin: 0,
          lineHeight: 1,
        }}
      >
        Rajeev Puri
      </h1>
      <span
        style={{ fontSize: "30px", color: OG_THEME.blue, fontWeight: "bold", marginTop: "10px" }}
      >
        Software Engineer & Creative
      </span>
      <div
        style={{
          marginTop: "40px",
          display: "flex",
          alignItems: "center",
          color: OG_THEME.zinc400,
          fontSize: "22px",
        }}
      >
        <span style={{ marginRight: "30px" }}>📍 London, UK</span>
        <span>Joined April 2024</span>
      </div>
    </div>
  </div>
);

/**
 * 5. CONTACT OG
 * Focus: Call to Action
 */
export const ContactOG = () => (
  <div
    style={{
      height: "100%",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: OG_THEME.blue,
      padding: "80px",
      position: "relative",
      overflow: "hidden",
    }}
  >
    <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `radial-gradient(circle at 2px 2px, ${OG_THEME.black}20 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
    />
    <div
      style={{
        padding: "15px 30px",
        backgroundColor: "black",
        borderRadius: "4px",
        marginBottom: "40px",
        border: "1px solid rgba(255,255,255,0.2)",
      }}
    >
      <span
        style={{
          color: "white",
          fontSize: "20px",
          fontWeight: "bold",
          fontFamily: "monospace",
          letterSpacing: "4px",
        }}
      >
        INITIALIZE_CONNECTION
      </span>
    </div>
    <h1
      style={{
        fontSize: "120px",
        fontWeight: "900",
        color: OG_THEME.black,
        margin: 0,
        textAlign: "center",
        letterSpacing: "-6px",
        lineHeight: 0.9,
      }}
    >
      GET_IN_
      <br />
      TOUCH
    </h1>
    <p
      style={{
        fontSize: "36px",
        color: OG_THEME.black,
        fontWeight: "bold",
        marginTop: "40px",
        backgroundColor: "rgba(0,0,0,0.05)",
        padding: "10px 20px",
        borderRadius: "4px",
      }}
    >
      contact@rajeevpuri.com.np
    </p>
  </div>
);

/**
 * 6. BLOG OG
 * Focus: Content and Readability
 */
export const BlogOG = ({ title = "Latest Insights", tags = ["NEXTJS", "REACT"] }) => (
  <div
    style={{
      height: "100%",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      backgroundColor: OG_THEME.black,
      padding: "80px",
      position: "relative",
    }}
  >
    <GridBackground />
    <div
      style={{
        display: "flex",
        gap: "10px",
        marginBottom: "40px",
      }}
    >
        {tags.map(tag => (
            <div key={tag} style={{ color: OG_THEME.blue, border: `1px solid ${OG_THEME.blue}`, padding: "4px 12px", fontSize: "14px", fontWeight: "bold" }}>
                {tag}
            </div>
        ))}
    </div>
    <span
      style={{
        color: OG_THEME.zinc400,
        fontSize: "20px",
        fontWeight: "bold",
        textTransform: "uppercase",
        letterSpacing: "4px",
      }}
    >
      ENGINEERING_LOG
    </span>
    <h1
      style={{
        fontSize: "85px",
        fontWeight: "900",
        color: OG_THEME.white,
        marginTop: "20px",
        lineHeight: 1.05,
        letterSpacing: "-2px",
      }}
    >
      {title}
    </h1>
    <div style={{ marginTop: "auto", display: "flex", alignItems: "center", borderTop: `1px solid ${OG_THEME.zinc900}`, paddingTop: "40px" }}>
      <img
        src="https://avatars.githubusercontent.com/u/154011772?v=4"
        style={{ width: "70px", height: "70px", borderRadius: "12px", border: `2px solid ${OG_THEME.zinc800}` }}
      />
      <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px" }}>
        <span
            style={{
            color: OG_THEME.white,
            fontSize: "24px",
            fontWeight: "bold",
            }}
        >
            Rajeev Puri
        </span>
        <span style={{ color: OG_THEME.zinc400, fontSize: "16px" }}>Software Engineer</span>
      </div>
      <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: OG_THEME.blue }} />
          <span style={{ color: OG_THEME.white, fontSize: "18px", fontWeight: "bold", letterSpacing: "1px" }}>LIVE_READ</span>
      </div>
    </div>
  </div>
);

/**
 * PREVIEW APPLICATION
 * Renders all route-specific OG layouts for review.
 */
export default function App() {
  return (
    <div
      style={{
        backgroundColor: "#050505",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "100px",
        padding: "100px 0",
      }}
    >
      <Section label="HOME_ROUTE" Component={<HomeOG />} />
      <Section label="SERVICES_ROUTE" Component={<ServicesOG />} />
      <Section label="PROJECTS_ROUTE" Component={<ProjectsOG />} />
      <Section label="ABOUT_ROUTE" Component={<AboutOG />} />
      <Section label="CONTACT_ROUTE" Component={<ContactOG />} />
      <Section
        label="BLOG_ROUTE"
        Component={
          <BlogOG title="Scaling Next.js with Distributed Edge Cache" tags={["NEXTJS", "PERFORMANCE"]} />
        }
      />
    </div>
  );
}

function Section({ label, Component }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "30px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <div style={{ width: "40px", height: "1px", backgroundColor: OG_THEME.blue }} />
          <span
            style={{
              color: OG_THEME.blue,
              fontFamily: "monospace",
              fontSize: "16px",
              fontWeight: "bold",
              letterSpacing: "4px",
            }}
          >
            {label}
          </span>
          <div style={{ width: "40px", height: "1px", backgroundColor: OG_THEME.blue }} />
      </div>
      <div
        style={{
          width: "1200px",
          height: "630px",
          transform: "scale(0.7)",
          transformOrigin: "top",
          border: "1px solid #1a1a1a",
          boxShadow: "0 50px 100px rgba(0,0,0,0.8)",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        {Component}
      </div>
    </div>
  );
}
