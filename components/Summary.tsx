interface SummaryProps {
    content: string;
  }
  
  export function Summary({ content }: SummaryProps) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Summary</h3>
        <div className="prose max-w-none">
          {content.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    );
  }