import React from "react";
import { StateType } from "../../types/util";

import "./index.scss";

interface ClipSubmitButtonProps {
  ApiState: StateType;
  handleSubmit: () => Promise<void>;
}

const ClipSubmitButton = ({
  ApiState,
  handleSubmit,
}: ClipSubmitButtonProps) => {
  if (ApiState.loading)
    return <span className="status loading">...loading</span>;
  if (ApiState.error)
    return (
      <span className="status error">
        {ApiState.error?.response?.data?.message ??
          "네트워크 에러가 발생했습니다"}
      </span>
    );
  if (ApiState.data)
    return <span className="status success">저장되었습니다</span>;

  return (
    <button onClick={handleSubmit} className="save_button">
      클립하기
    </button>
  );
};

export default ClipSubmitButton;
