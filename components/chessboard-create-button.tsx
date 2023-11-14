"use client";

const ChessBoardCreateButton = () => {
  return (
    <button
      onClick={() => {
        fetch("/api/chessboard", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: "",
        });
      }}
    >
      add data to Sqlite
    </button>
  );
};

export default ChessBoardCreateButton;
