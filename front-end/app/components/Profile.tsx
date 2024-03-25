const Profile = () => {

  return (
    <div className="container mx-auto py-10 px-4 max-w-6xl">
      <div className="mb-12">
        <h1 className="text-3xl leading-none tracking-tight md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
          My Profile
        </h1>
      </div>

      <div className="mb-12">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-t from-green-1 to-teal-1 mb-4">
            Profile Information
        </h2>
        <p className="text-gray-700 leading-relaxed mb-5 font-bold">
          Name: 
        </p>
        <p className="text-gray-700 leading-relaxed mb-5 font-bold">
          Email:
        </p>
        <p className="text-gray-700 leading-relaxed mb-5 font-bold">
          Phone Number:
        </p>
        <p className="text-gray-700 leading-relaxed mb-5 font-bold">
          Company:
        </p>
    
      </div>
    </div>
  );
};

export default Profile;
