import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Logo from "./img/logos.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ReactEcharts from "echarts-for-react";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import image from "./img/image.png";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import img from "./img/pics.png";
import { Divider } from '@mui/material';

import "./App.css";

function App() {
  const option = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu"],
      axisLine: {
        show: false, // Hide the vertical axis line
      },
      splitLine: {},
    },
    yAxis: {
      type: "value",
      axisLabel: {
        show: false, // Hide the Y-axis values
      },
    },

    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
        itemStyle: {
          barBorderRadius: [5, 5, 0, 0], // Specify border radius for each corner
        },
      },
    ],
  };
  const options = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu"],
    },
    yAxis: {
      type: "value",
      axisLabel: {
        show: false, // Hide the Y-axis values
      },
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: "line",
        symbolSize: 10,
      },
    ],
  };

  const opt = {
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
        areaStyle: {
          color: "#38AA94", // Set the fill color to red
        },
        lineStyle: {
          color: "#38AA94", // Set the line color to #38AA94
        },
        showSymbol: false,
      },
    ],
    tooltip: {
      trigger: "axis", 
      axisPointer: {
        type: "cross", 
      },
    },
  };
  const dividerStyle = {
    width: '90%', 
    marginLeft:"15px",
    borderLeft: '1px solid #ccc', // Set the border style and color
    marginTop:"50px"
  };

  const data = [
    {
    title: "Virtual STEM Clubs for Gr 4-9 with Destination Exploration",
    date:"Wed, Feb 24,2021",
      time:"12:00pm - 1:100pm"
  },
    {
    title: "Art NOW Series presents Catherine Burgess",
    date:"Tue, Jan 03,2022",
      time:"12:00pm - 1:100pm"
  },
    {
    title: "Art NOW Series presents Catherine Burgess",
    date:"Sun, Dec 12,2021",
      time:"12:00pm - 1:100pm"
  },
    {
      title: "Art NOW Series presents Catherine Burgess",
      date: "Mon, Oct 23,2021",
      time:"12:00pm - 1:100pm"
    },


]

  return (
    <div className="home">
      <div className="dashboard-slide">
        <img src={Logo} alt="log" className="logo" />
        <ul style={{ listStyleType: "none" }} className="dashboard-left">
          <li className="li">
            {" "}
            <GridViewOutlinedIcon /> <p>Dashboard</p>
          </li>
          <li className="li">
            {" "}
            <AutoStoriesOutlinedIcon />
            <p> Courses</p>
          </li>
          <li className="li">
            {" "}
            <CalendarMonthOutlinedIcon /> <p>Exam</p>{" "}
          </li>
          <li className="li">
            {" "}
            <EditNoteOutlinedIcon /> <p>Results</p>{" "}
          </li>
          <li className="li">
            {" "}
            <PeopleAltOutlinedIcon /> <p>Students</p>
          </li>
          <li className="li">
            {" "}
            <ChatOutlinedIcon /> <p>Message</p>
          </li>
          <li className="li">
            {" "}
            <AssignmentOutlinedIcon /> <p>Notice Board</p>
          </li>
          <li className="li">
            {" "}
            <LiveTvOutlinedIcon /> <p>Live Class</p>
          </li>
        </ul>
        <div className="profile-section">
          <Avatar alt="Haris James" src="/static/images/avatar/2.jpg" />
          <h4>Haris James</h4>
          <p style={{ color: "gray" }}> Assistant Professor</p>
          <p style={{ color: "gray" }}>
            Dept. of <strong style={{ color: "black" }}> Graphic Design</strong>{" "}
          </p>
          <Button
            variant="contained"
            style={{ color: "white", backgroundColor: "#38AA94" }}
          >
            View Profile
          </Button>
        </div>
      </div>
      {/* .........mid section... */}
      <div style={{ backgroundColor: "#FAFCFE" }}>
        <h2 className="mid-text" >overview</h2>
        <div className="card-section">
          <Card sx={{ minWidth: 330, height: "330px" }}>
            <CardContent>
              <h3>Total Students</h3>
              <h4 style={{fontSize:"20px"}}>930</h4>
              <ReactEcharts option={option} lazyUpdate={true} />
            </CardContent>
          </Card>
          <Card className="card-div">
            {" "}
            <CardContent>
              <h3>Course</h3>
              <h4 style={{ fontSize: "20px" }}> 40</h4> <ReactEcharts option={options} lazyUpdate={true} />{" "}
            </CardContent>
          </Card>
          <Card className="card-div">
            {" "}
            <CardContent>
              {" "}
              <h3>Total Students</h3>
              <h4 style={{ fontSize: "20px" }}>930</h4>
              <ReactEcharts option={option} lazyUpdate={true} />{" "}
            </CardContent>
          </Card>
        </div>
        <div className="chart">
          {" "}
          <Card>
            {" "}
            <CardContent>
              <div className="card-title">
                <p> Class Static</p>
                <p style={{ display: "flex", textAlign: "center" }}>
                  {" "}
                  <span>Course </span>
                  <ExpandMoreOutlinedIcon />{" "}
                </p>
              </div>

              <ReactEcharts option={opt} lazyUpdate={true} />
            </CardContent>
          </Card>{" "}
        </div>
        <div className="live-sec">
          {" "}
          <Card style={{ marginRight: "1rem" }}>
            <CardContent>
              <div className="live-section">
                <h2>Live Class</h2>
                <p className="timer-sec">
                  {" "}
                  <AccessTimeOutlinedIcon /> 01pm - 02pm{" "}
                </p>
              </div>
              <img src={image} alt="icon" className="live-image" />
              <ul style={{ listStyleType: "none" }}>
                <li>
                  Class: <strong> One-line Drawing Method </strong>
                </li>
                <li>
                  Batch: <strong> GDM (2/2) </strong>
                </li>
                <li style={{ overflowWrap: "break-word" }}>
                  Class:{" "}
                  <strong>
                    {" "}
                    <a href="" style={{ color: "#38AA94" }}>
                      https://meet.google.com/vcs?authe.dmra
                    </a>{" "}
                  </strong>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div class="date-picker">
                <h2> Exam Schedule </h2>
              </div>

            </CardContent>
          </Card>
        </div>
      </div>
      <div className="right-sec">
        <TextField
          placeholder="Search..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px", // Adjust the border radius as needed
            },
          }}
        />
        <h2> Upcoming Classes</h2>
        <div className="right-section">
          {" "}
          <p>15 march</p>{" "}
          <p>
            {" "}
            <MoreHorizIcon />{" "}
          </p>{" "}
        </div>

        <Card style={{ borderRadius: "20px" }}>
          <CardContent>
            <div className="notification">
              {" "}
              <h2 style={{ color: "gray" }}>09:00</h2>{" "}
              <div className="vertical-divider"></div>{" "}
              <div>
                <p style={{ color: "gray", marginBottom: "10px" }}>
                  {" "}
                  GMD 2nd semester{" "}
                </p>{" "}
                <h4> One-line Drawing Method </h4>
              </div>{" "}
            </div>
            <div className="notification1">
              {" "}
              <h2 style={{ color: "gray" }}>12:00</h2>{" "}
              <div className="vertical-divider"></div>{" "}
              <div>
                <p style={{ color: "gray", marginBottom: "10px" }}>
                  {" "}
                  GMD 2nd semester{" "}
                </p>{" "}
                <h4> One-line Drawing Method </h4>
              </div>{" "}
            </div>
          </CardContent>
        </Card>
        <div className="right-section">
          {" "}
          <p>17 march</p>{" "}
          <p>
            {" "}
            <MoreHorizIcon />{" "}
          </p>{" "}
        </div>

        <Card style={{ borderRadius: "20px" }}>
          <CardContent>
            <div className="notification">
              {" "}
              <h2 style={{ color: "gray" }}>02:00</h2>{" "}
              <div className="vertical-divider"></div>{" "}
              <div>
                <p style={{ color: "gray", marginBottom: "10px" }}>
                  {" "}
                  GMD 2nd semester{" "}
                </p>{" "}
                <h4> One-line Drawing Method </h4>
              </div>{" "}
            </div>
            <div className="notification1">
              {" "}
              <h2 style={{ color: "gray" }}>04:00</h2>{" "}
              <div className="vertical-divider"></div>{" "}
              <div>
                <p style={{ color: "gray", marginBottom: "10px" }}>
                  {" "}
                  GMD 2nd semester{" "}
                </p>{" "}
                <h4> One-line Drawing Method </h4>
              </div>{" "}
            </div>
          </CardContent>
        </Card>
        <Divider style={dividerStyle} />
        <h3 style={{padding:"10px  10px"}}> Notice board</h3>
        {data?.map((item)=>
          <Card sx={{ borderRadius: "10px" }} >
            <CardContent sx={{ display: "flex", flexDirection: "row" }}>
              <img src={img} alt="img" style={{ width: "60px", borderRadius: "10px" }} />
              <div style={{ marginLeft: "15px" }}>
                <h5>{item.title}
                </h5>
                <p style={{ fontSize: "12px", color: "gray", paddingTop: "3px" }}> <strong> {item.date}, </strong> {item.time} </p>
              </div>
            </CardContent>
          </Card>
        
        )}
        
      </div>
      
    </div>
  );
}

export default App;
