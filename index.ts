interface CommandResult {
  stdout: string;
  stderr: string;
  status: boolean;
  exitCode: number;
}

export default function $(
  strings: TemplateStringsArray,
  ...values: any[]
): CommandResult {
  let command = "";
  for (let i = 0; i < strings.raw.length; i++) {
    command += strings.raw[i];
    if (i < values.length) {
      command += values[i].toString();
    }
  }

  const result = runCommand(command);
  return result;
}

export function runCommand(command: string) {
  const command_list = command.split(" ");
  const res = Bun.spawnSync(command_list, {
    stdio: ["inherit", "inherit", "inherit"],
  });

  return {
    stdout: (res.stdout || "").toString(),
    stderr: (res.stderr || "").toString(),
    status: res.success,
    exitCode: res.exitCode,
  };
}
