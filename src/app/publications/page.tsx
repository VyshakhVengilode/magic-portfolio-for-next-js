'use client';

export default function PublicationsPage() {
  return (
    <div
      className="text-white flex flex-col items-center px-4 py-10"
      style={{
        width: '100vw',
        height: '100vh',
        boxSizing: 'border-box',
        backgroundColor: 'transparent', 
      }}
    >
      {/* Header */}
      <h1 className="text-4xl font-extrabold text-center mb-2 tracking-tight">Publications</h1>
      <p className="text-lg text-gray-300 text-center mb-8 max-w-xl">
        Explore my published writeups from around the web on this page
      </p>
      <p className="text-lg text-gray-300 text-center mb-8 max-w-xl">
         Check out my writeups at{' '}
      <a
        href="https://www.hopp.bio/vyshakhvengilode" 
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#2367ff' }}
      >
        Bio.Link
     </a>.
    </p>

      {/* Responsive iframe container */}
      <div
        style={{
          width: '100%',
          maxWidth: '1400px',
          height: '100%',
          maxHeight: '550px',
          flex: 1,
          overflow: 'auto',
          boxSizing: 'border-box',
        }}
      >
        <iframe
          src="https://www.hopp.bio/vyshakhvengilode"
          title="BioLink"
          loading="lazy"
          allowFullScreen
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            borderRadius: '12px',
            boxShadow: '0 0 10px rgba(0,0,0,0.5)',
          }}
        />
      </div>
    </div>
  );
}
