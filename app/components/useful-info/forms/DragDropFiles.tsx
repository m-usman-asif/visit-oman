"use client";
import {
  ChangeEvent,
  DragEvent,
  useRef,
  useState,
} from "react";

const DragDropFiles = () => {
  const [files, setFiles] = useState<FileList | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const droppedFiles = event.dataTransfer.files;
    setFiles(droppedFiles);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    setFiles(selectedFiles);
  };

  const handleUpload = () => {
    if (!files) return;

    const formData = new FormData();
    Array.from(files).forEach((file) => {
      formData.append("Files", file);
    });

    // fetch(
    //   "link", {
    //     method: "POST",
    //     body: formData
    //   }
    // )
  };
  const truncateFileName = (name: string, maxLength: number) => {
    if (name.length <= maxLength) return name;
    const extension = name.split('.').pop();
    return `${name.substring(0, maxLength - (extension?.length ?? 0) - 3)}...${extension}`;
  };

  return (
    <>
      {files && (
        <div className="uploads vo-paragraph flex h-[46px] w-full cursor-default flex-row items-center border-[1px] border-[#E1E1E1] px-[13px]">
          <ul className="flex flex-row w-[85%] overflow-hidden line-clamp-1 text-nowrap">
            {Array.from(files).map((file, idx) => (
              <li key={idx} className="inline-block">{truncateFileName(file.name, 30)}</li>
            ))}
          </ul>
          <div className="actions">
            <button onClick={() => setFiles(null)}>
              <span className="text-[#00000099]">
                Cancel
              </span>
            </button>
            {/* <button
              onClick={handleUpload}
              className="ml-[4px] cursor-pointer text-[#29B6A3]"
            >
              browse to upload
            </button> */}
          </div>
        </div>
      )}
      {
        !files && (
          <div
          className="dropzone vo-paragraph flex h-[46px] w-full cursor-default flex-row items-center border-[1px] border-[#E1E1E1] px-[46px]"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <span className="text-[#00000099]">
            Drop a file here or
          </span>
          <button
            className="ml-[4px] cursor-pointer text-[#29B6A3]"
            onClick={() => inputRef.current?.click()}
          >
            browse to upload
          </button>
          <input
            type="file"
            // multiple
            onChange={handleFileChange}
            hidden
            // accept="image/png, image/jpeg"
            ref={inputRef}
          />
        </div>
        )
      }
     
    </>
  );
};

export default DragDropFiles;
