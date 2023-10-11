import ControlledForm from '@/components/ControlledForm'

const Homepage = async () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">
        Controlled input form
      </h1>
      <ControlledForm />

      <p className="my-6 text-center">
        But wait… how do I validate input values in uncontrolled inputs? Check
        out this page on MDN for the details:{' '}
        <a
          href="https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation"
          target="_blank"
          className=" underline text-purple-950 font-semibold"
        >
          Using built-in form validation
        </a>
      </p>
    </>
  )
}

export default Homepage
