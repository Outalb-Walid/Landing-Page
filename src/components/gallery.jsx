import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";

export const Gallery = (props) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const data = [
    { thumb: "img/portfolio/1.jpg", title: "Website1" },
    { thumb: "img/portfolio/3.jpg", title: "Website2" },
    { thumb: "img/portfolio/4.jpg", title: "Website3" },
    { thumb: "img/portfolio/5.jpg", title: "Website4" },
    { thumb: "img/portfolio/6.jpg", title: "Website5" },
    { thumb: "img/portfolio/8.jpg", title: "Website7" },
  ];

  const images = data.map((obj) => obj.thumb.replace("-small", "-large"));

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>ReelWebsite</h2>
          <p>
            Explore our website section to view visually captivating reel
            website projects
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {data.map(({ title, thumb }, index) => (
              <div
                key={index}
                onClick={() => openImageViewer(index)}
                className="col-sm-6 col-md-4 col-lg-4"
              >
                <div className="portfolio-item cursor">
                  <div className="hover-bg">
                    <div className="hover-text">
                      <h4>{title}</h4>
                    </div>
                    <img
                      src={thumb}
                      className="img-responsive"
                      alt="Project Title"
                    />{" "}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {isViewerOpen && (
            <ImageViewer
              src={images}
              backgroundStyle={{ zIndex: 99999 }}
              currentIndex={currentImage}
              onClose={closeImageViewer}
            />
          )}
        </div>
      </div>
    </div>
  );
};
