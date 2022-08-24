function SayHello(props) {
    const name = props.name;
    const company = props.company;
   
    return (
      <p>
        Hello, {name} from {company}!
      </p>
    );
  }


//   penggunaanya dengan cara 

<SayHello name="Bill" company="Microsoft" />; // <p>Hello, Bill from Microsoft!</p>
<SayHello name="Steve" company="Apple" />; // <p>Hello, Steve from Apple!</p>
<SayHello name="Mark" company="Facebook" />; // <p>Hello, Mark from Facebook!</p>