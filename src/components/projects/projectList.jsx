import React from 'react';

const Link = (url, text) => {
  return <a
    href={url}
    target='_blank'
    style={{
      textDecoration: 'underline'
    }}
  >
    {text}
  </a>
}

export const projectList = [{
  id: 'uuv-project',
  title: 'Designing an RTG for an Underwater Vehicle',
  description: 'Adapting RTG technology for unmanned underwater vehicles.',
  thumbnail: "https://res.cloudinary.com/dgnqdbhjg/image/upload/v1741390151/remus-rtg-arrows-bottom_xp8wbw.png",
  images: [
    {
      link: 'https://res.cloudinary.com/dgnqdbhjg/image/upload/v1741390027/gamma_sim_pic_y3pbjp.png',
      caption: 'Gamma simulation image',
    },
    {
      link: 'https://res.cloudinary.com/dgnqdbhjg/image/upload/v1741390151/remus-rtg-arrows-bottom_xp8wbw.png',
      caption: 'Simple UUV set up',
    },
  ],
  video: 'https://res.cloudinary.com/dgnqdbhjg/video/upload/v1741390246/gamma_sim_recording_waudtb.mov',
  text: `* IN PROGRESS
    For my Capstone project, I am working with a team to adapt radioisotope thermoelectric generator (RTG) technology for use in unmanned underwater vehicles.

    Underwater vehicles have many uses, and low-power missions can get by with current batteries. However, for missions that require more power, a more robust energy source is needed. Currently, RTGs are mostly used in space - our aim is to find out what changes we need to make so that they are better suited for life underwater.

    My main role is in simulating the radiation and determining how we can shield onboard electronics from the damaging rays. Using GEANT4, I modeled the fuel and surrounding material (video and picture shown). I also created a custom counter to identify each location of energy deposition and was able to determine the safe distance for various levels of lead shielding.

    Extensions - Make the thing!!`,
},
{
  id: 'detector-project',
  title: 'Oil on Water Detector',
  description: 'Prototype for detecting oil on water using machine learning.',
  thumbnail: "https://res.cloudinary.com/dgnqdbhjg/image/upload/v1741023951/oilwater_xpcwqb.jpg",
  images: [
    {
      link: 'https://res.cloudinary.com/dgnqdbhjg/image/upload/v1741023834/example_data.png',
      caption: 'Example training data',
    },
    {
      link: 'https://res.cloudinary.com/dgnqdbhjg/image/upload/v1741023951/oilwater_xpcwqb.jpg',
      caption: 'Oil on water',
    },
  ],
  video: 'https://res.cloudinary.com/dgnqdbhjg/video/upload/v1741023156/test_creek_qjsbwt.mov',
  text: <>I worked with Berkeley's Strawberry Creek monitors to prototype an oil detector. Using the YOLO ML package, I trained a model that could detect the presence of gasoline on water.

    To get training data - without pouring gasoline into a real creek - I built a test bed that constantly circulated water. I took images of water moving with and without gasoline present and used that to train the model. Then I wrote some code to reduce the image quality of the images to mirror real-life situations.

    For images of quality 50x42 pixels, the model was 96% accurate. Code is available 
    <a 
      href="https://github.com/tristan-gardner/OilDetector"
      target='_blank'
      style={{
        textDecoration: 'underline'
      }}
    >here</a>.

    Extensions - This accuracy seems a little too high; test conditions may need to be more realistic. Also exploring how the model could work in low-light/night conditions.
    </>
},
{
  id: 'waterer-project',
  title: 'Automatic Plant Waterer',
  description: 'Arduino-based system for watering plants automatically.',
  thumbnail: "https://res.cloudinary.com/dgnqdbhjg/image/upload/v1686787569/final_setup_go7pek.jpg",
  images: [
    {
      link: 'https://res.cloudinary.com/dgnqdbhjg/image/upload/v1686787611/parts_lkhfxp.jpg',
      caption: 'Project parts',
    },
    {
      link: 'https://res.cloudinary.com/dgnqdbhjg/image/upload/v1686787572/wiring_u3dngn.jpg',
      caption: 'Wiring setup',
    },
    {
      link: 'https://res.cloudinary.com/dgnqdbhjg/image/upload/v1686787572/motor_setup_qqheg8.jpg',
      caption: 'Motor setup',
    },
    {
      link: 'https://res.cloudinary.com/dgnqdbhjg/image/upload/v1686787555/diagram_dqa4dt.png',
      caption: 'Wiring diagram',
    },
  ],
  video: 'https://res.cloudinary.com/dgnqdbhjg/video/upload/v1686787790/final_silsiq.mov',
  text: <>This was my first project getting into robotics. It uses an Arduino controller to read inputs from two soil moisture sensors. When it decides the soil is dry for a given plant, it moves the hose into the corresponding positions and pumps water.

    The movement is achieved using a stepper motor and a timing belt. I made a small gate out of cardboard to tie the movement of the hose with that of the belt.

    The wiring diagram comes from Tinkercad, which does not have every hardware piece, so some substitutions are made (e.g., the pump is shown as a DC motor). The full diagram can be found 
    <a 
      href="https://www.tinkercad.com/things/iUfKlWaL1I4?sharecode=uOX0T7HsVTXXm5GdxWj3Niw0dW8fV_me2L-ZcklGWy0" 
      target="_blank"
      style={{
        textDecoration: 'underline'
      }}
    >here</a>.

    Extensions - An obvious next step is to 3D print a better chassis for this project and get away from the cardboard rig. It was great for making a low-fi setup but won't last over time. Also, more plants!</>,
},
{
  id: 'nobot-project',
  title: 'Nobot AI Detection',
  description: 'Service for detecting AI-generated content in student submissions.',
  thumbnail: "https://res.cloudinary.com/dgnqdbhjg/image/upload/v1741659113/logo_rsulzs.png",
  images: [
    {
      link: 'https://res.cloudinary.com/dgnqdbhjg/image/upload/v1686788047/homepage_dsuisd.png',
      caption: 'Nobot homepage',
    },
    {
      link: 'https://res.cloudinary.com/dgnqdbhjg/image/upload/v1686788045/email_lyewh3.png',
      caption: 'Email integration',
    },
  ],
  video: null,
  text: `Nobot was an attempt to build a service that detected AI-generated content in student submissions. Educators were meant to connect their Google Classrooms and send assignments to be scored. The service would then return a score for each student and a breakdown of the submissions.

    The tool was built using Python, React, TypeScript, and deployed on Azure. It used an AI model to detect AI content.

    Unfortunately, Turnitin.com, an already established player, beat us to the punch.`,
},
{
  id: 'speaker-project',
  title: 'The Santa Cruz Speaker',
  description: 'Turning a snowboard into a speaker using Dayton audio exciter.',
  thumbnail: "https://res.cloudinary.com/dgnqdbhjg/image/upload/v1686789590/speaker_ymnldv.png",
  images: [
    {
      link: 'https://res.cloudinary.com/dgnqdbhjg/image/upload/v1686789585/board_ob3frt.png',
      caption: 'Snowboard',
    },
    {
      link: 'https://res.cloudinary.com/dgnqdbhjg/image/upload/v1686789587/amp_f0hl7p.png',
      caption: 'Amplifier',
    },
    {
      link: 'https://res.cloudinary.com/dgnqdbhjg/image/upload/v1686789586/exciter_pyxzic.png',
      caption: 'Dayton audio exciter',
    },
    {
      link: 'https://res.cloudinary.com/dgnqdbhjg/image/upload/v1686789590/speaker_ymnldv.png',
      caption: 'Final speaker setup',
    },
  ],
  video: 'https://res.cloudinary.com/dgnqdbhjg/video/upload/v1686789595/speaker_rp8ryq.mov',
  text: <>Using a <a 
      href="https://www.parts-express.com/Dayton-Audio-DAEX25FHE-4-Framed-High-Efficiency-25mm-Exciter-295-224?quantity=1"
      target='_blank'
      style={{
        textDecoration: 'underline'
      }}
    >Dayton audio exciter</a>, a <a
      href="https://www.parts-express.com/PE3W-BT-Rechargeable-Portable-3W-Bluetooth-Amplifier-320-630?quantity=1"
      target='_blank'
      style={{
        textDecoration: 'underline'
      }}
    >Bluetooth amplifier</a>, and some fasteners, I turned my old snowboard into a speaker!

    This is an extension of DML speakers - there's lots to be found about these online, but to cut to the chase, some snowboards are made of a carbon fiber material with a honeycomb pattern, which is supposed to be great for projecting sound. Below, you can see the materials needed as well as a video showing it in action.

    Extensions - I love this speaker, but of course, there is more to do. I hope to make a 3D-printed casing to house the components and allow it to be screwed on and off using the binding holes. I'd also like to experiment with different exciters and using multiple to see if I can get the sound to be cleaner and louder.
    </>
},
{
  id: 'slackronym-project',
  title: 'Slackronym',
  description: 'Custom Slack bot for defining and looking up company-specific lingo.',
  thumbnail: "https://res.cloudinary.com/dgnqdbhjg/image/upload/v1741659122/slack_pvcdja.png",
  images: [
    {
      link: 'https://res.cloudinary.com/dgnqdbhjg/image/upload/v1687977712/slack_message_kqhcp9.png',
      caption: 'Slack message example',
    },
  ],
  video: 'https://res.cloudinary.com/dgnqdbhjg/video/upload/v1687977570/slackronym_bdpooi.mp4',
  text: <>I built a <a 
      href="https://github.com/tristan-gardner/slackronym" 
      target='_blank'
      style={{
        textDecoration: 'underline'
      }}
    >
    custom Slack bot</a> that helps define and look up company-specific lingo. Similar bots exist on the market, but if they store the data, it's in their system, which many companies are not okay with, given they may use it to store info about core features or upcoming products.

    The backend is built with Python Django and is intended to be hosted as a deployed Azure function. Below is an example of recalling a predefined term ARR.

    Extensions - continue to add projects, photos, etc. 
                Clean up the video in the snowboard speaker project card.  
                Alter image carrousel so that you can see next and previous images.
                Optomize the images for web to speed up load times.</>
},
]
