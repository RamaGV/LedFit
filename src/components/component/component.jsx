
import { Button } from "@/components/ui/button"
import { ClipboardIcon, PlayIcon, SettingsIcon, StarIcon } from "./Icons"; // Asegúrate de ajustar la ruta según la estructura de tu proyecto

export function Component() {
  return (
    (<div className="flex flex-col h-full w-full bg-gray-950 text-gray-50">
      <header
        className="flex items-center justify-between h-14 px-4 border-b border-gray-800">
        <Button className="rounded-full" size="icon" variant="ghost">
          <SettingsIcon className="h-5 w-5" />
        </Button>
        <div className="flex items-center gap-2">
          <StarIcon className="h-5 w-5 text-yellow-400" />
          <span className="text-sm font-medium">Premium</span>
        </div>
        <Button className="rounded-full" size="icon" variant="ghost">
          <ClipboardIcon className="h-5 w-5" />
        </Button>
      </header>
      <div className="flex-1 p-6 space-y-6">
        <div className="bg-gray-900 rounded-lg p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium">Entrenamiento personalizado</h2>
            <div className="flex items-center gap-2 text-sm font-medium text-yellow-400">
              <StarIcon className="h-4 w-4" />
              <span>Premium</span>
            </div>
          </div>
          <p className="text-gray-400">Create your training session by mixing workouts</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <img
              alt="Cuenta regresiva"
              className="w-full h-24 object-cover"
              height="150"
              src="/img1.svg"
              style={{
                aspectRatio: "150/150",
                objectFit: "cover",
              }}
              width="150" />
            <div className="p-4 space-y-1">
              <h3 className="text-base font-medium">Cuenta regresiva</h3>
              <p className="text-gray-400 text-sm">Timed workout</p>
              <div className="flex justify-end">
                <Button className="rounded-full" size="sm" variant="ghost">
                  <PlayIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <img
              alt="Cuenta ascendente"
              className="w-full h-24 object-cover"
              height="150"
              src="/placeholder.svg"
              style={{
                aspectRatio: "150/150",
                objectFit: "cover",
              }}
              width="150" />
            <div className="p-4 space-y-1">
              <h3 className="text-base font-medium">Cuenta ascendente</h3>
              <p className="text-gray-400 text-sm">Timed workout</p>
              <div className="flex justify-end">
                <Button className="rounded-full" size="sm" variant="ghost">
                  <PlayIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <img
              alt="For Time"
              className="w-full h-24 object-cover"
              height="150"
              src="/placeholder.svg"
              style={{
                aspectRatio: "150/150",
                objectFit: "cover",
              }}
              width="150" />
            <div className="p-4 space-y-1">
              <h3 className="text-base font-medium">For Time</h3>
              <p className="text-gray-400 text-sm">Timed workout</p>
              <div className="flex justify-end">
                <Button className="rounded-full" size="sm" variant="ghost">
                  <PlayIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <img
              alt="AMRAP"
              className="w-full h-24 object-cover"
              height="150"
              src="/placeholder.svg"
              style={{
                aspectRatio: "150/150",
                objectFit: "cover",
              }}
              width="150" />
            <div className="p-4 space-y-1">
              <h3 className="text-base font-medium">AMRAP</h3>
              <p className="text-gray-400 text-sm">Timed workout</p>
              <div className="flex justify-end">
                <Button className="rounded-full" size="sm" variant="ghost">
                  <PlayIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <img
              alt="Tabata"
              className="w-full h-24 object-cover"
              height="150"
              src="/placeholder.svg"
              style={{
                aspectRatio: "150/150",
                objectFit: "cover",
              }}
              width="150" />
            <div className="p-4 space-y-1">
              <h3 className="text-base font-medium">Tabata</h3>
              <p className="text-gray-400 text-sm">Timed workout</p>
              <div className="flex justify-end">
                <Button className="rounded-full" size="sm" variant="ghost">
                  <PlayIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <img
              alt="EMOM"
              className="w-full h-24 object-cover"
              height="150"
              src="/placeholder.svg"
              style={{
                aspectRatio: "150/150",
                objectFit: "cover",
              }}
              width="150" />
            <div className="p-4 space-y-1">
              <h3 className="text-base font-medium">EMOM</h3>
              <p className="text-gray-400 text-sm">Timed workout</p>
              <div className="flex justify-end">
                <Button className="rounded-full" size="sm" variant="ghost">
                  <PlayIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>)
  );
}
