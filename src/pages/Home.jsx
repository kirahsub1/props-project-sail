import Blog from "../Components/Blogs/Blog";
import Card from "../Components/Card/Card"
import Product from "../Components/product/product";
import "./Home.css"

const Home = () => {
  return (
    <div>
      {/* profileCard section */}
      <div className="container1">
        <Card
          image="https://res.cloudinary.com/dgcjq4kbf/image/upload/v1708439136/OPDR1153_x0r2ge.jpg"
          oruko="Oyindamola"
          age={25}
          location="Lagos"
        />
        <Card
          image="https://res.cloudinary.com/dgcjq4kbf/image/upload/v1716136752/Group_437_a3uhhg.png"
          oruko="John"
          age={12}
          location="Lagos"
          color="render-x"
        />
        <Card
          image="https://res.cloudinary.com/dgcjq4kbf/image/upload/v1708439136/OPDR1153_x0r2ge.jpg"
          oruko="Simisola"
          age={30}
          location="Lagos"
          color="render-v"
        />
        <Card
          image="https://res.cloudinary.com/dgcjq4kbf/image/upload/v1708439136/OPDR1153_x0r2ge.jpg"
          oruko="Femi"
          age={20}
          location="Lagos"
          color="render-u"
        />
      </div>
      {/* ProductCard section */}
      <div className="Product-container">
        <Product
          image="https://res.cloudinary.com/dgcjq4kbf/image/upload/v1726748292/image-waffle-desktop_xcoi0b.jpg"
          productname="Waffle"
          price={99.5}
          description="A delicious and healthy dessert made with all natural ingredients."
        />
        <Product
          image="https://res.cloudinary.com/dgcjq4kbf/image/upload/v1726748292/image-tiramisu-desktop_lmh2l1.jpg"
          productname="Waffle"
          price={99.5}
          description="A delicious and healthy dessert made with all natural ingredients."
        />
        <Product
          image="https://res.cloudinary.com/dgcjq4kbf/image/upload/v1726748292/image-waffle-desktop_xcoi0b.jpg"
          productname="Waffle"
          price={99.5}
          description="A delicious and healthy dessert made with all natural ingredients."
        />
        <Product
          image="https://res.cloudinary.com/dgcjq4kbf/image/upload/v1726748292/image-waffle-desktop_xcoi0b.jpg"
          productname="Waffle"
          price={99.5}
          description="A delicious and healthy dessert made with all natural ingredients."
        />
      </div>
      {/* Blog content section */}
      <div className="blogs">
        <Blog
          title="The Future of Technology"
          author="Jane Doe"
          content="Technology is evolving at an unprecedented rate. From AI to blockchain, the innovations we are witnessing today will shape the future in ways we can barely imagine. In this blog post, we explore the most exciting trends and what they mean for businesses and individuals alike."
          date="October 22, 2024"
        />
        <Blog
          title="The Future of Technology"
          author="Jane Doe"
          content="Technology is evolving at an unprecedented rate. From AI to blockchain, the innovations we are witnessing today will shape the future in ways we can barely imagine. In this blog post, we explore the most exciting trends and what they mean for businesses and individuals alike."
          date="October 22, 2024"
          color="render-one"
        />
        <Blog
          title="The Future of Technology"
          author="Jane Doe"
          content="Technology is evolving at an unprecedented rate. From AI to blockchain, the innovations we are witnessing today will shape the future in ways we can barely imagine. In this blog post, we explore the most exciting trends and what they mean for businesses and individuals alike."
          date="October 22, 2024"
          color="render-two"
        />
        <Blog
          title="The Future of Technology"
          author="Jane Doe"
          content="Technology is evolving at an unprecedented rate. From AI to blockchain, the innovations we are witnessing today will shape the future in ways we can barely imagine. In this blog post, we explore the most exciting trends and what they mean for businesses and individuals alike."
          date="October 22, 2024"
        />
      </div>
    </div>
  );
}

export default Home