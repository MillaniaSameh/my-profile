import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import "../App.css";

const setDate = (label, date) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DemoItem label={label}>
          <DatePicker
            readOnly
            defaultValue={date}
            views={["year", "month", "day"]}
            sx={{
              border: "2px solid #ccc",
              borderRadius: "5px",
              "& .MuiInputBase-input": {
                color: "white",
              },
              "& .MuiIconButton-root": { color: "white" },
              "& .Mui-disabled": { color: "white" },
            }}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
};

const carouselItems = [
  <MDBCarouselItem itemId={1} height={"600px"}>
    <div className="course-container">
      <div className="item1">
        <h1 className="course-name">Front-end Web Developer Intern</h1>
        <h1 className="course-provider">
          <span className="my-name">Algorithmz-Tooli</span>
        </h1>
        <div style={{ display: "flex", gap: "30px", marginBottom: "20px" }}>
          <div>{setDate("From", dayjs("2021-08-01"))}</div>
          <div>{setDate("To", dayjs("2021-09-13"))}</div>
        </div>
        <p className="course-description">Responsabilities:</p>
        <ul>
          <li>
            <p className="experience-item">
              Develop and maintain the user interface
            </p>
          </li>
          <li>
            <p className="experience-item">Collaborate with team members</p>
          </li>
          <li>
            <p className="experience-item">
              Optimize web pages for speed and performance
            </p>
          </li>
          <li>
            <p className="experience-item">
              Ensure cross-browser compatibility
            </p>
          </li>
          <li>
            <p className="experience-item">Code cocumentation</p>
          </li>
        </ul>
      </div>

      <div className="item2">
        <img
          src="https://drive.google.com/uc?export=view&id=1MOfRWmY6Z4-JvsVu8ZL_1ETGkmJaY5zJ"
          alt="algorithmzTooli-logo"
          style={{ width: "90%" }}
        />
      </div>
    </div>
  </MDBCarouselItem>,
  <MDBCarouselItem itemId={2} height={"600px"}>
    <div className="course-container">
      <div className="item1">
        <h1 className="course-name">Full Stack Web Developer Intern</h1>
        <h1 className="course-provider">
          <span className="my-name">SilverKey Technologies</span>
        </h1>
        <div style={{ display: "flex", gap: "30px", marginBottom: "20px" }}>
          <div>{setDate("From", dayjs("2023-06-25"))}</div>
          <div>
            <TextField
              id="outlined-read-only-input"
              defaultValue="Currently employed"
              InputProps={{
                readOnly: true,
              }}
              sx={{
                border: "2px solid #ccc",
                borderRadius: "5px",
                marginTop: "36px",
                "& .MuiInputBase-input": {
                  color: "white",
                },
              }}
            />
          </div>
        </div>
        <p className="course-description">Responsabilities:</p>
        <ul>
          <li>
            <p className="experience-item">
              Develop and maintain web applications (work on both the front-end
              and back-end of the applications)
            </p>
          </li>
          <li>
            <p className="experience-item">Collaborate with team members</p>
          </li>
          <li>
            <p className="experience-item">Write clean and efficient code</p>
          </li>
          <li>
            <p className="experience-item">Test and debug code</p>
          </li>
          <li>
            <p className="experience-item">Code cocumentation</p>
          </li>
        </ul>
      </div>

      <div className="item2">
        <img
          src="https://images.wuzzuf-data.net/files/company_logo/SilverKey-Technologies--Egypt-Egypt-3981.png"
          alt="silverKey-logo"
          style={{ width: "90%" }}
        />
      </div>
    </div>
  </MDBCarouselItem>,
];

function Experience(props) {
  return (
    <div ref={props.refname} className="section">
      <div className="courses-section">
        <MDBCarousel showIndicators showControls interval={50000}>
          {...carouselItems}
        </MDBCarousel>
      </div>
    </div>
  );
}

export default Experience;
