interface CommandResult {
  stdout: string;
  stderr: string;
  status: boolean;
  exitCode: number;
}

export default function $(command: string): CommandResult {
  const command_list = command.split(" ");
  const res = Bun.spawnSync(command_list, {
    stdio: ["inherit", "pipe", "pipe"],
  });

  return {
    stdout: res.stdout.toString(),
    stderr: res.stderr.toString(),
    status: res.success,
    exitCode: res.exitCode,
  };
}
