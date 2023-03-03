type Props = {
  children: React.ReactNode;
};
const DataNotFound: React.FC<Props> = (props) => {
  return <p className="error">{props.children}</p>;
};

export default DataNotFound;
