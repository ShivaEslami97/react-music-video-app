import { render, screen } from "@testing-library/react";
import VideoCard from "../components/VideoCard";

const mockVideos = [
  {
    id: 1,
    title: "Video 1",
    artist: "Artist 1",
    genre_id: 5,
    image_url: "https://example.com/image1.jpg",
  },
  {
    id: 2,
    title: "Video 2",
    artist: "Artist 2",
    genre_id: 8,
    image_url: "https://example.com/image2.jpg",
  },
];

describe("VideoCard component was called with mock videos", () => {
  it("renders a music video card", () => {
    render(
      <VideoCard
        title={mockVideos[0].title}
        artist={mockVideos[0].artist}
        imageUrl={mockVideos[0].image_url}
      />
    );

    expect(screen.getByText("Video 1")).toBeDefined();
    expect(screen.getByText("Artist 1")).toBeDefined();
    expect(screen.getByText("Video 1")).toBeDefined();
    const videoImage = screen.getByRole("img");
    expect(videoImage).toHaveAttribute("src", "https://example.com/image1.jpg");
  });
});
