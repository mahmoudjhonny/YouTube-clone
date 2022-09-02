import { Stack } from "@mui/material";
import { categories } from "../utils/index";

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((cat) => (
        <button
          className="category-btn"
          onClick={() => setSelectedCategory(cat.name)}
          key={cat.name}
          style={{
            backgroundColor: cat.name === selectedCategory && "#FC1503",
            color: "#fff",
          }}
        >
          <span
            style={{
              color: cat.name === selectedCategory ? "#fff" : "red",
            }}
          >
            {cat.icon}
          </span>
          <span>{cat.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
