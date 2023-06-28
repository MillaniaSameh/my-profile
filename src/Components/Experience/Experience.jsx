import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import SliderCustom from "../Slider/SliderCustom";
import "./Experience.css";

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
  <div className="experience-container" key={1}>
    <div className="experience-item1">
      <h1 className="experience-name">Front-end Web Developer Intern</h1>
      <h1 className="experience-provider">
        <span className="my-name">Algorithmz-Tooli</span>
      </h1>
      <div className="from-to">
        <div>{setDate("From", dayjs("2021-08-01"))}</div>
        <div>{setDate("To", dayjs("2021-09-13"))}</div>
      </div>
      <p className="experience-description">Responsibilities:</p>
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
          <p className="experience-item">Ensure cross-browser compatibility</p>
        </li>
        <li>
          <p className="experience-item">Code documentation</p>
        </li>
      </ul>
    </div>

    <div className="experience-item2">
      <img
        src="https://drive.google.com/uc?export=view&id=1MOfRWmY6Z4-JvsVu8ZL_1ETGkmJaY5zJ"
        alt="algorithmzTooli-logo"
        className="provider-logo"
      />
    </div>
  </div>,
  <div className="experience-container" key={2}>
    <div className="experience-item1">
      <h1 className="experience-name">Full Stack Web Developer Intern</h1>
      <h1 className="experience-provider">
        <span className="my-name">SilverKey Technologies</span>
      </h1>
      <div className="from-to">
        <div>{setDate("From", dayjs("2023-06-25"))}</div>
        <div>
          <TextField
            id="outlined-read-only-input"
            defaultValue="Employed"
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
      <p className="experience-description">Responsibilities:</p>
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
          <p className="experience-item">Code documentation</p>
        </li>
      </ul>
    </div>

    <div className="experience-item2">
      <img
        src="https://images.wuzzuf-data.net/files/company_logo/SilverKey-Technologies--Egypt-Egypt-3981.png"
        alt="silverKey-logo"
        className="provider-logo"
      />
    </div>
  </div>,
];

function Experience(props) {
  return (
    <div ref={props.refname} className="section">
      <SliderCustom items={carouselItems} />
    </div>
  );
}

export default Experience;
