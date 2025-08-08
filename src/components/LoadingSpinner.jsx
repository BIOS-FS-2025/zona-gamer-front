const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center bg-transparent">
      <div className="w-16 h-16 border-4 border-primary border-t-transparent border-solid rounded-full animate-spin"></div>
    </div>
  )

}

export default LoadingSpinner;