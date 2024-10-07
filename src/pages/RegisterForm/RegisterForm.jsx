import {
  Card,
  TextField,
  MenuItem,
  Button,
  FormControl,
  FormLabel,
} from "@mui/material";
import { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "./RegisterForm.module.css";

const genders = [
  { value: "MALE", label: "MALE" },
  { value: "FEMALE", label: "FEMALE" },
];

function RegisterForm() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [mobilenumber, setMobilenumber] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [profileimage, setProfileimage] = useState(null);
  const [dateofbirth, setDateofbirth] = useState("");
  const [spouse, setSpouse] = useState("");
  const [company, setCompany] = useState("");
  const [anniversary, setAnniversary] = useState("");
  const [business, setBusiness] = useState("");
  const [experience, setExperience] = useState("");
  const [website, setWebiste] = useState("");
  const [address, setAddress] = useState("");
  const [area, setArea] = useState("");
  const [products, setProducts] = useState("");
  const [landline, setLandline] = useState("");
  const [producttag, setProducttag] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileimage(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      name,
      gender,
      email,
      mobilenumber,
      whatsapp,
      profileimage,
      dateofbirth,
      spouse,
      company,
      anniversary,
      business,
      experience,
      website,
      address,
      area,
      products,
      landline,
      producttag,
    });

    setName("");
    setGender("");
    setEmail("");
    setMobilenumber("");
    setWhatsapp("");
    setProfileimage(null);
    setDateofbirth("");
    setSpouse("");
    setCompany("");
    setAnniversary("");
    setBusiness("");
    setExperience("");
    setWebiste("");
    setAddress("");
    setArea("");
    setProducts("");
    setLandline("");
    setProducttag("");
  };
  return (
    <div className={styles.container}>
      <Card component="main" className={styles.card}>
        <form onSubmit={handleSubmit}>
          <div className={styles.gridContainer}>
            <div className={styles.field}>
              <TextField
                id="full-name"
                label="Full Name"
                variant="standard"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                fullWidth
              />
            </div>
            <div className={styles.field}>
              <TextField
                id="gender"
                select
                label="Gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                variant="standard"
                fullWidth
                required
              >
                {genders.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div className={styles.field}>
              <TextField
                id="email"
                label="Email"
                type="email"
                variant="standard"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                fullWidth
              />
            </div>
          </div>
          <div className={styles.gridContainer}>
            <div className={styles.field}>
              <TextField
                id="mobile-no"
                label="Mobile No"
                variant="standard"
                type="number"
                value={mobilenumber}
                onChange={(e) => setMobilenumber(e.target.value)}
                required
                fullWidth
              />
            </div>
            <div className={styles.field}>
              <TextField
                id="whatsapp"
                label="WhatsApp"
                variant="standard"
                type="number"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                required
                fullWidth
              />
            </div>
            <div className={styles.field}>
              <FormControl fullWidth>
                <FormLabel required>Profile Image</FormLabel>
                <div className={styles.fileContainer}>
                  <input
                    type="file"
                    id="profile-image"
                    name="image"
                    className={styles.hiddenInput}
                    onChange={handleFileChange}
                  />
                  <label htmlFor="profile-image" className={styles.fileButton}>
                    Choose File
                  </label>
                  <div className={styles.filePath}>
                    {profileimage ? profileimage.name : "No file chosen"}
                  </div>
                </div>
              </FormControl>
            </div>
          </div>
          <div className={styles.gridContainer}>
            <div className={styles.field}>
              <TextField
                id="date-of-birth"
                label="Date of Birth"
                variant="standard"
                type="date"
                value={dateofbirth}
                onChange={(e) => setDateofbirth(e.target.value)}
                required
                fullWidth
                sx={{
                  "& label": {
                    transform: "translate(0, -0.5rem) scale(0.75)",
                  },
                }}
              />
            </div>
            <div className={styles.field}>
              <TextField
                id="spouse"
                label="Spouse Name"
                variant="standard"
                value={spouse}
                onChange={(e) => setSpouse(e.target.value)}
                required
                fullWidth
              />
            </div>
            <div className={styles.field}>
              <TextField
                id="date-of-anniversary"
                label="Date of Anniversary"
                variant="standard"
                type="date"
                value={anniversary}
                onChange={(e) => setAnniversary(e.target.value)}
                required
                fullWidth
                sx={{
                  "& label": {
                    transform: "translate(0, -0.5rem) scale(0.75)",
                  },
                }}
              />
            </div>
          </div>
          <div className={styles.gridContainer1}>
            <div className={styles.field}>
              <TextField
                id="company"
                label="Name of the Company"
                variant="standard"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                required
                fullWidth
              />
            </div>
            <div className={styles.field}>
              <TextField
                id="business-category"
                label="Business Category"
                variant="standard"
                value={business}
                onChange={(e) => setBusiness(e.target.value)}
                required
                fullWidth
              />
            </div>
            <div className={styles.field}>
              <TextField
                id="experience"
                label="No of Experiences"
                variant="standard"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                fullWidth
              />
            </div>
            <div className={styles.field}>
              <TextField
                id="website"
                label="Website"
                variant="standard"
                value={website}
                onChange={(e) => setWebiste(e.target.value)}
                required
                fullWidth
              />
            </div>
          </div>
          <div className={styles.gridContainer}>
            <div className={styles.field}>
              <TextField
                id="landline"
                type="number"
                label="Landline Number"
                variant="standard"
                value={landline}
                onChange={(e) => setLandline(e.target.value)}
                required
                fullWidth
              />
            </div>
            <div className={styles.field}>
              <TextField
                id="address"
                label="Address"
                variant="standard"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                helperText="Please type Full Address"
                required
                fullWidth
              />
            </div>
            <div className={styles.field}>
              <TextField
                id="area"
                label="Area"
                variant="standard"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                required
                fullWidth
              />
            </div>
          </div>
          {/* <div className={styles.gridContainer1}> */}
          <div className={styles.field}>
            <TextField
              id="products"
              label="Products /Services"
              variant="standard"
              value={products}
              onChange={(e) => setProducts(e.target.value)}
              fullWidth
              helperText="Type all Products or Services separated by comma"
            />
          </div>
          <div className={styles.field}>
            <TextField
              id="product-tag"
              label="Product Tag"
              variant="standard"
              value={producttag}
              onChange={(e) => setProducttag(e.target.value)}
              fullWidth
              helperText="Type all Products or Services related Tags Separated by comma ( like CCTV can be - Security System, Camera, Surveillance etc. )"
            />
          </div>
          {/* </div> */}
          <div className={styles.submitButton}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              size="large"
              endIcon={<ArrowForwardIcon />}
            >
              Register
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default RegisterForm;
