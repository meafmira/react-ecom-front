import React from 'react'
import { Link } from 'react-router'

class PostsCategory extends React.Component {
  render() {
    console.log("Render");
    let category = {
      title: "Новости"
    };
    let posts = [
      {
        title: "Уникальная возможность приобрести планшеты Acer в рассрочку, на льготных условиях!!!!!",
        img: "http://avtech.uz/modules/prestapress/uploads/timthumb.php?src=/modules/prestapress/uploads/51/59.jpg&w=84",
        shortText: "Уникальная возможность приобрести планшеты Acer в рассрочку, на льготных условиях!!!!!"
      },
      {
        title: "Уникальная возможность приобрести планшеты Acer в рассрочку, на льготных условиях!!!!!",
        img: "http://avtech.uz/modules/prestapress/uploads/timthumb.php?src=/modules/prestapress/uploads/51/59.jpg&w=84",
        shortText: "Уникальная возможность приобрести планшеты Acer в рассрочку, на льготных условиях!!!!!"
      },
      {
        title: "Уникальная возможность приобрести планшеты Acer в рассрочку, на льготных условиях!!!!!",
        img: "http://avtech.uz/modules/prestapress/uploads/timthumb.php?src=/modules/prestapress/uploads/51/59.jpg&w=84",
        shortText: "Уникальная возможность приобрести планшеты Acer в рассрочку, на льготных условиях!!!!!"
      },
      {
        title: "Уникальная возможность приобрести планшеты Acer в рассрочку, на льготных условиях!!!!!",
        img: "http://avtech.uz/modules/prestapress/uploads/timthumb.php?src=/modules/prestapress/uploads/51/59.jpg&w=84",
        shortText: "Уникальная возможность приобрести планшеты Acer в рассрочку, на льготных условиях!!!!!"
      },
      {
        title: "Уникальная возможность приобрести планшеты Acer в рассрочку, на льготных условиях!!!!!",
        img: "http://avtech.uz/modules/prestapress/uploads/timthumb.php?src=/modules/prestapress/uploads/51/59.jpg&w=84",
        shortText: "Уникальная возможность приобрести планшеты Acer в рассрочку, на льготных условиях!!!!!"
      }
    ];
    let postsList = posts.map(post => {
      return (
        <div className="media" key={ post.id }>
          <div className="media-left">
            <a href="#">
              <img className="media-object" src={ post.img } alt="..." />
            </a>
          </div>
          <div className="media-body">
            <h4 className="media-heading">{ post.title }</h4>
            <p>{ post.shortText }</p>
            <Link to="page">читать</Link>
          </div>
          <hr />
        </div>
      );
    });
    return (
      <div>
        <h1 className="page-header">{ category.title }</h1>
          { postsList }
      </div>
    )
  }
}

export default PostsCategory;
