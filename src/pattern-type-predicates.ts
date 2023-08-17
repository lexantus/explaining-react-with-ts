const values = ["a", "b", undefined, "c"];
const filteredValues = values.filter((value): value is string =>
  Boolean(value)
);
filteredValues; // string[]
// --------------------------------------------------------------------
interface IRectangle {
  width: number;
  height: number;
}

interface ICircle {
  radius: number;
}

type Shape = IRectangle | ICircle;

function isRectangle(shape: Shape): shape is IRectangle {
  return (shape as IRectangle).width !== undefined && (shape as IRectangle).height !== undefined;
}

function isCircle(shape: Shape): shape is ICircle {
  return (shape as any).radius !== undefined;
}

isRectangle({ radius: 3 });
isRectangle({ width: 4 });
isCircle({ radius: 7 });

// --------------------------------------------------------------------

type NormalUser = { role: 'normal' };
type AdminUser = { role: 'admin' };

function assertUserIsAdmin(
  user: NormalUser | AdminUser
): asserts user is AdminUser {
  if (user.role !== "admin") {
    //console.log('user is amdin');
    throw new Error("Not an admin user");
  }
}

assertUserIsAdmin({ role: 'normal' });
assertUserIsAdmin({ role: 'admin' });

