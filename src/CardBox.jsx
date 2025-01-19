import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FireplaceIcon from "@mui/icons-material/Fireplace";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
export default function CardBox({ result }) {
  const Hot_Url =
    "https://static.vecteezy.com/system/resources/previews/008/938/010/non_2x/hot-springs-onsen-natural-bath-at-national-park-chae-son-lampang-thailand-in-the-morning-sunrise-natural-hot-spring-bath-surrounded-by-mountains-in-northern-thailand-soft-focus-free-photo.jpg";
  const cold_Url =
    "https://media.istockphoto.com/id/853844276/photo/blue-ice-and-cracks-on-the-surface-of-the-ice-frozen-lake-under-a-blue-sky-in-the-winter-the.jpg?s=612x612&w=0&k=20&c=gtWZP3TFa9ALn597BTe5atl3GkEsafs6B8bedSo6tvU=";
  const rainy_Url =
    "https://static.vecteezy.com/system/resources/thumbnails/029/771/613/small_2x/epicgraphy-shot-of-rainy-season-background-enjoying-nature-rainfall-and-happy-life-concept-generative-ai-free-photo.jpeg";

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={
            result.humidity > 80
              ? rainy_Url
              : result.temp > 15
              ? Hot_Url
              : cold_Url
          }
          title="green iguana"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {result.city}{
            result.humidity > 80
              ? <ThunderstormIcon/>
              : result.temp > 15
              ? <FireplaceIcon/>
              : <AcUnitIcon/>
          }
          </Typography>
          <Typography
            variant="body2"
            component={"span"}
            sx={{ color: "text.secondary" }}
          >
            <p>feelsLike:{result.feelsLike}&deg;C</p>
            <p> humidity:{result.humidity}</p>
            <p>temp:{result.temp}</p>
            <p>tempMax:{result.tempMax}</p>
            <p>tempMin:{result.tempMin}</p>
            <p>
              The weather can be describe as {result.weather} and feels like{" "}
              {result.feelsLike}&deg;C{" "}
            </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
