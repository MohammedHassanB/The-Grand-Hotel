import Heading from "../ui/Heading";
import SinupForm from "../features/authentication/SignupForm";
function NewUsers() {
  return (
    <>
      <Heading as="h1">Create a new user</Heading>
      <SinupForm />
    </>
  );
}

export default NewUsers;
