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
            "https://cdn.vox-cdn.com/thumbor/UK7BeVSPfZoaGu2zdmemh9xKhDk=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22807839/GettyImages_1175278483.jpg",
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
        },

        {
          title: "mens",
          imageUrl:
            "https://manofmany.com/wp-content/uploads/2016/02/what-people-need-to-know-about-mens-fashion-week.jpg",
          id: 5,
        },
      ],
    };
  }

  render() {
      return (
        <div className="directory-menu">
          {this.state.sections.map(({ title, imageUrl, id }) => (
            <MenuItem key={id} title={title} />
          ))}
        </div>
      );
  }
}


export default Directory;