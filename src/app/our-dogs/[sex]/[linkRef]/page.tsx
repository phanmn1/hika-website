"use client"

import PhotoAlbum from 'react-photo-album'
import { dogs } from '../../../data/dogArray'
import NextJsImage from '@/app/components/NextJsImage'
import { Fragment, useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

interface IImageGalleryProps {
  params: { linkRef: string }
}

import { photos } from '../../../data/dogArray'

export default function ImageGallery({ params }: IImageGalleryProps) {
  const { linkRef } = params
  console.log(linkRef)
  const dogPhotos = photos(linkRef)


  const [index, setIndex] = useState(-1);

  return (
    <Fragment>
      <div className='p-5'>
        <PhotoAlbum
          photos={dogPhotos}
          layout="rows"
          targetRowHeight={150}
          renderPhoto={NextJsImage}
          defaultContainerWidth={1200}
          onClick={({ index }) => setIndex(index)}
          sizes={{
            size: "calc(100vw - 40px)",
            sizes: [
              { viewport: "(max-width: 299px)", size: "calc(100vw - 10px)" },
              { viewport: "(max-width: 599px)", size: "calc(100vw - 20px)" },
              { viewport: "(max-width: 1199px)", size: "calc(100vw - 30px)" },
            ],
          }}
        />
      </div>

      <Lightbox
        slides={dogPhotos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </Fragment>
  )

}
