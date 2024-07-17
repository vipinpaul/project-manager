import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";

function CreateProject() {
  return <div className="flex flex-col gap-4 my-2">
    <div className="w-full flex flex-col gap-1">
      <Label className="text-xs font-normal">Username</Label>
      <Input name="username" id="username" className="h-9 bg-transparent border-gray-400 focus-visible:ring-gray-400 ring-offset-gray-400" />
    </div>
    <div className="w-full flex flex-col gap-1">
      <Label className="text-xs font-normal">Project Name</Label>
      <Input name="projectName" id="projectName" className="h-9 bg-transparent border-gray-400 focus-visible:ring-gray-400 ring-offset-gray-400" />
    </div>
    <div className="w-full flex flex-col gap-1">
      <Label className="text-xs font-normal">Abbreviation</Label>
      <Input name="abbreviation" id="abbreviation" className="h-9 bg-transparent border-gray-400 focus-visible:ring-gray-400 ring-offset-gray-400" />
    </div>
    <div className="w-full flex flex-col gap-1">
      <Label className="text-xs font-normal">Description</Label>
      <Textarea name="description" id="description" className="bg-transparent border-gray-400 focus-visible:ring-gray-400 ring-offset-gray-400" />
    </div>
  </div>;
}
export default CreateProject;
