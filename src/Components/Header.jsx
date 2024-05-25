import ReactDOM from "react-dom";
import Link from "@mui/material/Link";
import styles from "../Styles/Header.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
export default function Header() {
  return (
    <div>
      <div className={styles.header}>
        <span className={styles.title}>My To-Do List</span>
        <div className={styles.links}>
          <a target="_blank" href="https://github.com/Jamir2412/To-Do-App">
            <GitHubIcon sx={{ fontSize: 40 }} />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/jamir-ahmed-327418226/"
          >
            <LinkedInIcon sx={{ fontSize: 40 }} />
          </a>
          <a target="_blank" href="https://x.com/its_Jamir2412">
            <XIcon sx={{ fontSize: 40 }} />
          </a>
        </div>
      </div>
    </div>
  );
}
