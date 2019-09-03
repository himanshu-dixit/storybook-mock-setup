/*
  File containing list of typographical style used in Design System.
  This is the central source of all typography style.

  This should alway match the design guide.
  Reflects - https://www.figma.com/file/RSDNoTQabzXaBwvNijTjkrh0/Typesetting?node-id=32%3A2

  In sizes, we're using 1unit = 8px = .5rem  

  Date - 3 Sep 2019
  Author- Himanshu Dixit
*/
const typography = {
    family: {
      'heading': 'Graphik',
      'content': 'Avenir',
      'default': 'Avenir'
    },
    size: {
      '1.25':  '.75rem', // Generally - 12px
      '2': '1rem', //16px
      '2.5': '1.25rem', //20px
      '3':  '1.5rem', //24px
      '4': '2rem', //32px
      '5': '2.5rem', //40px
      '6': '3rem', //48px
      '7.5': '3.75rem', //60px
    },
    weight:{
      'bold': '900',
      'normal': '400'
    },
    lineHeight:{
      '2': '1rem', //16px
      '2.5': '1.25rem', //20px
    }
}

module.exports.default = typography;