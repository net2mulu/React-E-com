import React, { Component } from "react";
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';


class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl:
            "https://manofmany.com/wp-content/uploads/2017/10/Guide-to-Wearing-Mens-Hats-With-Suits-20-1200x800.jpg",
          id: 1,
        },

        {
          title: "jackets",
          imageUrl:
            "https://threadcurve.com/wp-content/uploads/2021/03/types-of-leather-jackets-Mar192021-1-min.jpg",
          id: 2,
        },

        {
          title: "sneakers",
          imageUrl:
            "https://c0.wallpaperflare.com/preview/833/512/948/shoes-shoe-store-rack.jpg",
          id: 3,
        },

        {
          title: "womens",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWd5wJs57oeJq-13alJu2pFTOM3s8ePwYbQOTYPJzG4Ixq3peyy_WPIU9wX2aJgULmICk&usqp=CAU",
          id: 4,
          size: "large",
        },

        {
          title: "mens",
          imageUrl:
            "https://manofmany.com/wp-content/uploads/2016/02/what-people-need-to-know-about-mens-fashion-week.jpg",
          id: 5,
          size: "large",
        },
      ],
    };
  }

  render() {
      return (
        <div className="directory-menu">
          {this.state.sections.map(({ title, imageUrl, id, size }) => (
            <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
          ))}
        </div>
      );
  }
}


export default Directory;