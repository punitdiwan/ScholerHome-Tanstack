import { useEffect } from "react";
import { HiX } from "react-icons/hi";

type ProcedureDialogProps = {
  open: boolean;
  onClose: () => void;
  title: string;               // Required
  description?: string;        // Optional
  steps: {                      // Sub-title + content
    subtitle: string;
    content: string | string[]; // Can be paragraph or list
  }[];
};

const ProcedureDialog: React.FC<ProcedureDialogProps> = ({
  open,
  onClose,
  title,
  description,
  steps,
}) => {
    useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-3xl max-h-[80vh] rounded-lg shadow-lg overflow-hidden flex flex-col z-10">
        
        {/* Header */}
        <div className="flex justify-between items-center px-6 pt-2 ">
          <h2 className="text-3xl font-abhaya text-secondary">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 cursor-pointer hover:text-gray-700 transition"
          >
            <HiX className="w-6 h-6" />
          </button>
        </div>

        {/* Optional Description */}
        {description && (
          <div className="px-6 pb-2 text-gray-700 border-b">
            {description}
          </div>
        )}

        {/* Scrollable Steps */}
        <div className="px-6 py-4 overflow-y-auto text-school-blue  flex-1 space-y-6">
          {steps.map((step, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-semibold mb-2">{step.subtitle}</h3>

              {Array.isArray(step.content) ? (
                <ul className="list-disc list-inside text-school-blue  space-y-1">
                  {step.content.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-700">{step.content}</p>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ProcedureDialog;
