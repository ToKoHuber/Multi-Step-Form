export const Input = ({ label, placeholder }) => {
  return (
    <div>
      <p>{label}</p>
      <input className="" type="text" placeholder={placeholder} />
    </div>
  );
};
