const isOnTrack = (student) => {
    const { certifications, codeWars } = student;
    return (
      certifications.resume &&
      certifications.linkedin &&
      certifications.github &&
      certifications.mockInterview &&
      codeWars.current > 600
    );
  };


  const Student = ({ student, toggleDetails }) => {
    const onTrackStatus = isOnTrack(student) ? 'On Track' : 'Off Track';
  
  }


