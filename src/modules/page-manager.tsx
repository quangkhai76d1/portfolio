import HomePage from '../components/home-page';

export interface IPageManagerProps {}

export default function PageManager(props: IPageManagerProps) {
  return (
    <div className="w-full h-full">
      <HomePage />
    </div>
  );
}
