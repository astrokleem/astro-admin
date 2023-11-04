import { FC } from 'react';

interface BaseCardProps {
  isLoading: boolean;
  children: React.ReactNode;
}

const BaseCard: FC<BaseCardProps> = ({ isLoading, children }) => {
  return (
    <div
      className={`${
        isLoading ? "p-6 flex items-center flex-col justify-center" : ""
      } bg-white rounded-lg dark:bg-gray-900`}
    >
      {isLoading ? (
        <div className="flex items-center space-x-4">Loading...</div>
      ) : (
        children
      )}
    </div>
  );
};

export default BaseCard;
