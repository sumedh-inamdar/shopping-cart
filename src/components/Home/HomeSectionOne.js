import React from 'react';
import rackets from '../../assets/featured collections/rackets.jpg';
import mensClothing from '../../assets/featured collections/mens-clothing.jpg';
import womensClothing from '../../assets/featured collections/womens-clothing.jpg';
import strings from '../../assets/featured collections/strings.jpg';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import FeaturedCollection from './FeaturedCollection';

export default function HomeSectionOne({ showAnimation }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.35
  });

  return (
    <div
      className="max-w-6xl py-12 md:py-32 px-6 mx-auto min-h-[350px]"
      ref={ref}>
      {inView ? (
        <div>
          <div className="text-4xl md:text-5xl mb-6 text-center animate-fade-in-top-0">
            Featured Collections
          </div>
          <ul className="text-center text-2xl font-light flex flex-col md:flex-row justify-around space-y-6 md:space-y-0 md:space-x-6">
            <Link to="/store/racquets/">
              <FeaturedCollection
                animation={`animate-fade-in-top-250`}
                showAnimation={showAnimation}
                image={rackets}
                title={`Tennis Racquets`}
              />
            </Link>
            <Link to="/store/mensClothing/">
              <FeaturedCollection
                animation={`animate-fade-in-top-500`}
                showAnimation={showAnimation}
                image={mensClothing}
                title={`Men's Clothing`}
              />
            </Link>
            <Link to="/store/womensClothing/">
              <FeaturedCollection
                animation={`animate-fade-in-top-750`}
                showAnimation={showAnimation}
                image={womensClothing}
                title={`Women's Clothing`}
              />
            </Link>
            <Link to="/store/strings/">
              <FeaturedCollection
                animation={`animate-fade-in-top-1000`}
                showAnimation={showAnimation}
                image={strings}
                title={`Strings`}
              />
            </Link>
          </ul>
        </div>
      ) : undefined}
    </div>
  );
}
HomeSectionOne.propTypes = {
  showAnimation: PropTypes.func
};
